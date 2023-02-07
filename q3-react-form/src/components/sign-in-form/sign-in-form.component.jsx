// styles
import "./sign-in-form.styles.scss";

// components
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default function SignInForm() {
  return (
    <div className="signin">
      <form>
        <div className="form-title">
          <h2>Already Members</h2>
          <a>Need help?</a>
        </div>
        <div className="inputs-container">
          <CustomInput
            type="text"
            name="username"
            placeholder="Enter Your Username"
          />
          <CustomInput
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <div className="btn-container">
            <CustomButton>SIGN IN</CustomButton>
          </div>
        </div>
      </form>
      <div className="signup-link">
        <p>Don't have an account yet?</p>
        <a>Create an account</a>
      </div>
    </div>
  );
}
