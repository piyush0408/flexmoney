import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import toast from "react-hot-toast";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(18);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("6-7AM");
  const completePayment = () => {
    if (!name || !email || !age || !date) {
      toast.error("all fields are mandatory");
      return;
    }

    if (age < 18 || age > 65) {
      toast.error("age should be 18 to 65");
      return;
    }

    const obj = {
      name,
      email,
      age,
      date,
      slot,
    };
    console.log(obj);
    axios
      .post("/api/v1/payment", obj)
      .then(function (response) {
        toast.success(response.data.message);
      })
      .catch(function (error) {
        toast.error("error while payment");
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="formContainer">
        <div className="inputContainer">
          <label>name</label>
          <input
            type="text"
            className="inputClass"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="inputContainer">
          <label>email</label>
          <input
            type="email"
            placeholder="email"
            className="inputClass"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="inputContainer">
          <label>age</label>
          <input
            type="number"
            className="inputClass"
            value={age}
            placeholder="18-65"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="eventContainer">
          <div className="inputContainer">
            <label>date</label>
            <input
              type="date"
              className="inputClass"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <div className="inputContainer">
            <label>Slot</label>

            <select
              name="Slot"
              id="slot"
              className="inputClass"
              onChange={(e) => setSlot(e.target.value)}
            >
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </div>
        </div>

        <button className="paymentButton" onClick={completePayment}>
          Pay 500
        </button>
      </div>
    </div>
  );
}

export default Form;
