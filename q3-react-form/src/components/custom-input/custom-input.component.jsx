// styles
import "./custom-input.styles.scss";

// hooks
import { useState } from "react";

export default function CustomInput({ type, ...props }) {
  const [show, setShow] = useState(false);
  function toggleShowPassword() {
    setShow((prevState) => !prevState);
  }
  const isPasswordInput = type === "password";
  return (
    <div className="input-container">
      <input
        className="custom-input"
        type={isPasswordInput ? (show ? "text" : "password") : type}
        {...props}
      />
      {type === "password" && (
        <img
          className="toggle"
          src={show ? "/hide.png" : "/show.png"}
          alt="toggle-password"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
}
