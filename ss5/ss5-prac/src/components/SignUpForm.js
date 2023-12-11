import { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const isValid =
      form.username &&
      form.email &&
      form.password &&
      form.confirmPassword &&
      form.password === form.confirmPassword;
    alert(
      isValid
        ? "Sign in successfully"
        : "Please fill out all the field or your confirm password is not same as previous password!!"
    );
  };

  return (
    <>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
