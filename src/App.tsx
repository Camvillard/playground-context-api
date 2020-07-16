import React, { useState } from "react";
import "./App.css";
import { ThemeContext, CartProvider } from "./context/context";
import { Text } from "./components/Text.component";
import { Cart } from "./components/Cart.component";
import { cartReducer } from "./context/reducer";
import { AddToCart } from "./components/AddToCart.component";

const styles = {
  light: {
    background: "wheat",
    height: "100vh",
    width: "100vw",
  },
  dark: {
    background: "darkGray",
    color: "white",
    height: "100vh",
    width: "100vw",
  },
};

function App() {
  const [theme, setTheme] = useState<string>("light");
  const switchThemes = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <div style={theme === "light" ? styles.light : styles.dark}>
          <button onClick={switchThemes}>change theme</button>
          <p>this is the background when theme is {theme}</p>
          <Text />
        </div>
      </div>
      <CartProvider>
        <Cart />
        <AddToCart />
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
