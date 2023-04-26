import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ZerFal</h3>
          <span className="loginDesc">
            Have your Friends and Family have fun in ZerFal.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">I forgot my password.</span>
            <button className="loginRegisterButton">
              Join Zerfal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
