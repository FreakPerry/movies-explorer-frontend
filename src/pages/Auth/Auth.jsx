import AuthForm from '../../components/AuthForm/AuthForm';

function Auth({ onRegister, onLogin, error, resetError }) {
  return (
    <AuthForm onRegister={onRegister} onLogin={onLogin} error={error} resetError={resetError} />
  );
}

export default Auth;
