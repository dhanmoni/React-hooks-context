import React, { Component } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

// const Navbar = () => {
//   return (
// <nav>
//   <h2>Context App</h2>
//   <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
// </nav>
//   );
// };

//CONTEXT USING CLASS COMPONENT:
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
        <h2>Context App</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
