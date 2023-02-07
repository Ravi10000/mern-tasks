// styles
import "./App.scss";

// components
import SignInForm from "./components/sign-in-form/sign-in-form.component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="/hero.png" alt="hero-bg" />
        <div className="signin-form-container">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default App;
