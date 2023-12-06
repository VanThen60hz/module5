// Login.tsx
import React, { ChangeEvent } from "react";

interface LoginProps {
  form: {
    email: string;
    password: string;
    isRemember: boolean;
  };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckbox: () => void;
  onSubmit: () => void;
}

const Login: React.FC<LoginProps> = ({
  form,
  onChange,
  onChangeCheckbox,
  onSubmit,
}) => {
  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              className="form-control email"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="form-floating">
            <input
              className="form-control password"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
            />
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                checked={form.isRemember}
                onChange={onChangeCheckbox}
              />{" "}
              Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="button"
            onClick={onSubmit}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
