import React, { useEffect, useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [validData, setValidData] = useState(false);

  const NAME_LENGTH_MIN = 12;
  const MIN_PASSWORD = 6;

  function buttonSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    function dataValidation() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const isValid = email.match(regexEmail)
        && parseFloat(password.length) >= MIN_PASSWORD
        && name.length >= NAME_LENGTH_MIN;

      setValidData(isValid);
    }

    dataValidation();
  }, [name, email, password]);

  return (
    <div>
      <h3>Cadastro</h3>
      <div>
        <form>
          <div>
            <h4>Nome</h4>
            <input
              data-testid="common_register__input-name"
              type="text"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </div>

          <div>
            <h4>Email</h4>
            <input
              data-testid="common_register__input-email"
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>

          <div>
            <h4>Senha</h4>
            <input
              data-testid="common_register__input-password"
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>

          <button
            data-testid="common_register__button-register"
            type="submit"
            onClick={ buttonSubmit }
            disabled={ !validData }
          >
            CADASTRAR
          </button>
        </form>
        {isError && (
          <div data-testid="common_register__element-invalid_register">
            Mensagem de erro
          </div>
        )}
      </div>
    </div>
  );
}
