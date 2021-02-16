import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider we will store data (state) and fucntionality (updaters) and anyone can access it via consumer

  const [cartOpen, setCartOpen] = useState(false);

  function toggelCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }
  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, closeCart, openCart, toggelCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCart() {
  // use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
