import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import getSalesById from '../services/getSalesById';

export default function SaleDetails() {
  const { saleId } = useParams();

  useEffect(() => {
    async function getApi() {
      const salesById = await getSalesById(saleId);
      console.log(salesById);
    }
    getApi();
  }, [saleId]);

  return (
    <div>
      <Navbar />
      <h1>Detalhes de vendas</h1>
      {
        // JSON.stringify(salesById)
      }
    </div>
  );
}
