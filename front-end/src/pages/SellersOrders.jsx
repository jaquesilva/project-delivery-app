// import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import getSalesBySellerId from '../services/getSalesByUserId';

// export default function SellersOrders() {
//   const history = useHistory();
//   const { id: sellerId } = JSON.parse(localStorage.getItem('user'));

//   const [sales, setSales] = useState([]);

//   async function getApi() {
//     const salesBySellerId = await getSalesBySellerId(sellerId);
//     setSales(salesBySellerId);
//   }

//   function handleClickLogout() {
//     console.log('click');
//     localStorage.setItem('user', '');
//     history.push('/login');
//   }

//   useEffect(() => {
//     getSalesBySellerId(sellerId).then(setSales);
//   }, [sellerIdgetApi]);

//   return (
//     <div>

//       <nav className="navbar-container">
//         <h1>
//           PEDIDOS
//         </h1>
//         <div data-testid="">
//           {localStorage.getItem('user') ? getLocalStorageName() : null}
//         </div>
//         <button
//           type="button"
//           data-testid="customer_products__element-navbar-link-logout"
//           onClick={ () => handleClickLogout() }
//         >
//           SAIR
//         </button>
//       </nav>

//       <div> CARDS C/ PEDIDOS </div>
//       {sales
//         .map(({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) => {
//           console.log(saleDate, totalPrice);
//           return (
//             <div key={ id }>
//               <div data-testid={ `seller_orders__element-order-id-${id}` }>
//                 {id}
//               </div>
//               <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
//                 {status}
//               </div>
//               <div data-testid={ `seller_orders__element-order-date-${id}` }>
//                 {saleDate}
//               </div>
//               <div data-testid={ `seller_orders__element-card-price-${id}` }>
//                 {totalPrice}
//               </div>
//               <div data-testid={ `seller_orders__element-card-address-${id}` }>
//                 {deliveryAddress}
//               </div>
//               <div data-testid={ `seller_orders__element-card-address-${id}` }>
//                 {deliveryNumber}
//               </div>
//             </div>
//           );
//         })}
//       {sales.length === 0 && <div>Nenhuma venda por aqui!</div>}

//     </div>
//   );
// }
