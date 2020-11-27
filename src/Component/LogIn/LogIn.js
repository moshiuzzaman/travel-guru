import React, { useContext, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavComponent from '../NavComponent/NavComponent';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './Firebase-Config';
import { useForm } from 'react-hook-form';
import "./LogIn.css"
import { Link, useHistory, useLocation } from "react-router-dom";
import { AllContext } from '../../App';
import { FaFacebook, FaGoogle } from 'react-icons/fa';


firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext);
    const [isNewUser, setIsNewUser] = useState(true)
    const [user, setUser] = useState({
        error: '',
        success: ""
    })
    user.error.length>1 && setTimeout(() => setUser({ error: '' }), 10000)
    const { register, errors, handleSubmit , watch} = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        if (isNewUser) {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(result => {
                    setLoginUser(result.user)
                    history.replace(from)
                })
                .catch(error => { setUser({ error: error.message }) });
        } else {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(result => {
                    const name = data.firstName + ' ' + data.lastName
                    updateUserInfo(name)
                    setUser({ success: "Your account Created Successfully" })
                })
                .catch(error => { setUser({ error: error.message }) });
        }
    };
    const updateUserInfo = name => {
        const userUpdate = firebase.auth().currentUser;
        userUpdate.updateProfile({
            displayName: name
        })
            .catch(error => { setUser({ error: error.message }) });
    }
    const GoogleSignInHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setLoginUser(res.user)
                history.replace(from)
            })
            .catch(error => { setUser({ error: error.message }) });
    }
    const FbHandel = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                setLoginUser(res.user)
                history.replace(from)
            })
            .catch(error => { setUser({ error: error.message }) });
    }

    return (
        <Container>
            <div className="NavWithBorder">
                <NavComponent ></NavComponent>
            </div>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        {isNewUser ? <h2>Log In</h2> : <h2>Create Account</h2>}
                        {!isNewUser && <input type="text" placeholder="First Name" name="firstName" ref={register({ required: "requered", pattern: {value: /^[A-Za-z]+$/i, message:"only Letter"} })} />}
                        {errors.firstName && <p className="error">First Name must be {errors.firstName.message}</p>}
                        {!isNewUser && <input type="text" placeholder="Last Name" name="lastName" ref={register({ required: "requered", pattern: {value: /^[A-Za-z]+$/i, message:"only Letter"} })} />}
                        {errors.lastName && <p className="error">Last Name must be {errors.lastName.message}</p>}
                        <input type="text" placeholder=" Email" name="email" ref={register({ required: "requered", pattern: {value: /^\S+@\S+\.\S+$/, message:"Valid"} })} />
                        {errors.email && <p className="error">Email must be {errors.email.message}</p>}
                        <input placeholder="Password" type="password" name="password" id="" ref={register({ required: "requered", minLength: {value: 8, message:"minimum 8 charecter"} } )} />
                        {errors.password && <p className="error">Password must be {errors.password.message}</p>}
                        {!isNewUser && <input placeholder="Re-type Password" name="password_repeat" type="password" ref={register({validate: value => value === password.current || "The passwords do not match"})}/>}
                        {errors.password_repeat && <p className="error">{errors.password_repeat.message}</p>}
                        {isNewUser &&
                            <div className="login-form-inline">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember" >Remember me</label>
                                <Link to="" className='forgotPassword'>Forgot Password</Link>
                            </div>
                        }
                        {!isNewUser ? <input type="submit" value="Create An Account" /> : <input type="submit" value="Login" />}

                        {isNewUser ?
                            <p align="center">Don't have an account <span className="loginTogler" onClick={() => setIsNewUser(!isNewUser)} > Create an account</span></p>
                            : <p align="center">Already Have an account <span className="loginTogler" onClick={() => setIsNewUser(!isNewUser)} > Log In</span></p>
                        }
                    </form>

                    <p align="center" className="form-bottom-error">{user.error}</p>
                    <p className="form-bottom-success">{user.success}</p>
                    <div className="login-between">
                        <p align="center" >Or</p>
                    </div>
                    <div align="center" >
                        <Button className="login-btn-google-fb" onClick={FbHandel} > <FaFacebook className="button-icon" />Continue With Facebook</Button>
                    </div>
                    <div align="center">
                        <Button className="login-btn-google-fb" onClick={GoogleSignInHandler}><FaGoogle className="button-icon" /> Sign in With Google</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;