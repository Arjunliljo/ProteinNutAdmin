import LoginForm from "../../Forms/LoginForm/LoginForm";

function Login() {
  return (
    <div className="login">
      <div className="login__logo-container">Logo</div>
      <div className="login__form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
