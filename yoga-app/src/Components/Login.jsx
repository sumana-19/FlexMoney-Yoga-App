import React from "react";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control rounded-4"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control rounded-4"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
