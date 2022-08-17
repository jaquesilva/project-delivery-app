import RegisterForm from './RegisterForm';

export default function AdminPage() {
  function getLocalStorageName() {
    const storage = JSON.parse(localStorage.getItem('user'));
    console.log(storage.name);
    return storage.name;
  }
  return (
    <div>
      <nav className="navbar-container">
        <h1>
          gerenciar usuarios
        </h1>
        <div data-testid="">
          {localStorage.getItem('user') ? getLocalStorageName() : null}
        </div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => handleClickLogout() }
        >
          SAIR
        </button>
      </nav>
      <RegisterForm />
    </div>
  );
}
