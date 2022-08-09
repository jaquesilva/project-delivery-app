import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  function buttonSubmit(e) {
    e.preventDefault();
  }

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
          {name}
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
