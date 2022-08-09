import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        </form>
      </div>
    </div>
  );
}
