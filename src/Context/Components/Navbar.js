import React, { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import { AuthContext } from "../ContextAPI/AuthContext";

//CONTEXT USING FUNCTIONAL COMPONENT WITH USECONTEXT API

const Navbar = () => {
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <h2>Context App</h2>
      <div onClick={() => dispatch({ type: "TOGGLE_AUTH" })}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

//CONTEXT USING CLASS COMPONENT:
// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
// const { isLightTheme, light, dark } = this.context;
// const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
//         <h2>Context App</h2>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

//CONTEXT USING THEMECONTEXT.CONSUMER WITH CLASS COMPONENT:
// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
//                   <h2>Context App</h2>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged in" : "Logged out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

export default Navbar;
