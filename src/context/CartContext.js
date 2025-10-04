import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      // ✅ Filter out any invalid items without id
      return Array.isArray(parsedCart) ? parsedCart.filter(item => item?.id) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    if (!product?.id) return; // Safety check
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const updateQuantity = (id, qty) => {
    setCart(prev =>
      prev.map(item =>
        Number(item.id) === Number(id) ? { ...item, quantity: qty } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart
      .reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      updateQuantity,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
