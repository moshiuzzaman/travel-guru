import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AllContext } from '../../App';
import DatePicker from 'react-datepicker';
import "./BookingForm.css";
import "react-datepicker/dist/react-datepicker.css"
import { useHistory } from 'react-router-dom';


const BookingForm = () => {
  const history = useHistory()
  const { register, errors, handleSubmit } = useForm({mode: "onChange"});
  const onSubmit = data => {
    history.push("/hotelDetails")
  };
  const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext)
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  return (
    <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Origin</label>
      <input
        type="text"
        name="Origin"
        placeholder="Type Your City"
        ref={register({ required: true, maxLength: 80, minLength: 3 })}
      />
      {errors.Origin && <span className="error">This field is not valid</span>}

      <label >Destination</label>
      <input
        type="text"
        defaultValue={exactLocation.name}
        placeholder="Type Your Destination"
        name="Destination"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.Destination && <span className="error">This field is required</span>}
      <div className='halfWidthInput-Left'>
        <label>From</label>
        <DatePicker
          selected={fromDate}
          onChange={data => setFromDate(data)}
          minDate={new Date()}
        />

      </div>
      <div className='halfWidthInput-right'>
        <label>To</label>
        <DatePicker
          selected={toDate}
          onChange={data => setToDate(data)}
          minDate={fromDate}
        />
      </div>

      <input type="submit" value="Start Booking" />
    </form>
  );
};

export default BookingForm;