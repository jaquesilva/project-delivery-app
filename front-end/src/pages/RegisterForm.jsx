// import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { postRegisterAdm } from '../services/requests';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [validData, setValidData] = useState(true);
  //   const history = useHistory();
  const NAME_LENGTH_MIN = 12;
  const MIN_PASSWORD = 6;

  async function buttonSubmit(e) {
    e.preventDefault();
    try {
      await postRegisterAdm({ name, email, password, role });
    //   history.push('/customer/products');
    } catch (error) {
      setUserAlreadyExists(true);
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  useEffect(() => {
    function dataValidation() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const isValid = email.match(regexEmail)
        && password.length >= MIN_PASSWORD
        && name.length >= NAME_LENGTH_MIN;
      setValidData(!isValid);
    }

    dataValidation();
  }, [name, email, password]);

  return (
    <div>
      <h3>Cadastrar novo usuário</h3>
      <div>
        <form>
          <div>
            <h4>Nome</h4>
            <input
              data-testid="admin_manage__input-name"
              type="text"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </div>

          <div>
            <h4>Email</h4>
            <input
              data-testid="admin_manage__input-email"
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>

          <div>
            <h4>Senha</h4>
            <input
              data-testid="admin_manage__input-password"
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>

          <div>tipo</div>
          <select
            value={ role }
            data-testid="admin_manage__select-role"
            onChange={ (e) => {
              setRole(e.target.value);
              console.log(e.target.value);
            } }
          >
            <option value="seller"> Vendedor </option>
            <option value="customer"> cliente </option>
            <option value="administrator"> administrador </option>
          </select>

          <button
            data-testid="admin_manage__button-register"
            type="submit"
            onClick={ buttonSubmit }
            disabled={ validData }
          >
            CADASTRAR
          </button>
        </form>
        {userAlreadyExists && (
          <div data-testid="admin_manage__element-invalid-register">
            Usuário já cadastrado.
          </div>
        )}
      </div>
    </div>
  );
}
