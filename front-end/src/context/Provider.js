import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

export function Provider({ children }) {
  const [buyProducts, setBuyProducts] = useState([]);

  const context = useMemo(
    () => ({
      buyProducts,
      setBuyProducts,
    }),
    [buyProducts],
  );

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
