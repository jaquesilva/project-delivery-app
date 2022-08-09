import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import requestInfo from '../services/requests';

export default function Login() {
  const [email, setEmail] = useState('');
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState('');
  const [isloginSuced, setIsloginSuced] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(true);

  const history = useHistory();

  async function handleLoginButton() {
    try {
      await requestInfo({ email, password });
      setIsloginSuced(true);
      console.log('Not show warn');
    } catch (error) {
      return setIsLoginValid(false);
    }
  }

  useEffect(() => {
    function validateInputs() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const MIN_PASSWORD = 6;
      if (
        email.match(regexEmail)
        && parseFloat(password.length) >= MIN_PASSWORD
      ) {
        return setButton(false);
      }
      return setButton(true);
    }
    validateInputs();
  }, [password, email]);

  if (isloginSuced) {
    return <Redirect to="/customer/products" />;
  }
  return (
    <div>
      <h1>Delivery App</h1>
      <p>logo do app</p>
      <form>
        <label htmlFor="username">
          <p>Username</p>
          <input
            type="text"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="Password">
          <p>Password</p>
          <input
            type="password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <div>

          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ button }
            onClick={ () => handleLoginButton() }
          >
            login
          </button>

        </div>
        <div>

          <button
            type="submit"
            data-testid="common_login__button-register"
            onClick={ () => history.push('/register') }
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
      {isLoginValid
        ? null : (
          <p data-testid="common_login__element-invalid-email">
            O endereço de e-mail ou a senha estão inválidos, tente novamente.
          </p>
        ) }
      {/* O avaliador espera que haja uma requisição POST para API, que retorne o status 404 - Not found; */}
    </div>
  );
}

// sqlMessage: "Table 'delivery-app-test.users' doesn't exist" vamos ter q mudar o nome da tabela
