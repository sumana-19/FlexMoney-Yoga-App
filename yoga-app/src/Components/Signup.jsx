import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  age: "",
  selectedSlot: "",
};

const backendURL = "http://localhost:3001";

const Signup = () => {
  const [selectedSlot, setSelectedSlot] = useState("6AM");
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const createUser = async (newUser) => {
    try {
      await axios
        .post(backendURL, newUser)
        .then((res) => {
          alert("User created successfully!");
          navigate("/payment");
          console.log(res);
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.age < 18 || formData > 65)
      alert("Your age must be between 18 and 65 years.");
    // console.log(formData);

    createUser(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const radioHandler = (e) => {
    setSelectedSlot(e.target.value);
    handleChange(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          required
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control rounded-pill"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="mb-3">
        <label>Your age</label>
        <input
          type="number"
          className="form-control rounded-pill"
          placeholder="Enter you age"
          name="age"
          onChange={handleChange}
          value={formData.age}
          required
        />
      </div>

      <div className="mb-3">
        <label>Choose a suitable batch timing</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="slot1"
            value="6AM"
            name="selectedSlot"
            checked={selectedSlot === "6AM"}
            onChange={radioHandler}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {" "}
            6:00-7:00 AM{" "}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="slot2"
            value="7AM"
            name="selectedSlot"
            checked={selectedSlot === "7AM"}
            onChange={radioHandler}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {" "}
            7:00-8:00 AM{" "}
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="slot3"
            value="8AM"
            name="selectedSlot"
            checked={selectedSlot === "8AM"}
            onChange={radioHandler}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {" "}
            8:00-9:00 AM{" "}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="slot4"
            value="5PM"
            name="selectedSlot"
            checked={selectedSlot === "5PM"}
            onChange={radioHandler}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {" "}
            5:00-6:00 PM{" "}
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control rounded-pill"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default Signup;
