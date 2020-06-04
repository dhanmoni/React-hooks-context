import React, { createContext, useState, useReducer } from "react";
import { ThemeReducer } from "../Reducer/ThemeReducer";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, dispatch] = useReducer(ThemeReducer, true);
  const [light] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// class ThemeContextProvider extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLightTheme: true,
//       light: {
// syntax: "#555",
// ui: "#ddd",
// bg: "#eee",
//       },
//       dark: {
// syntax: "#ddd",
// ui: "#333",
// bg: "#555",
//       },
//     };
//   }

// toggleTheme = () => {
//   this.setState({ isLightTheme: !this.state.isLightTheme });
// };
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

export default ThemeContextProvider;
