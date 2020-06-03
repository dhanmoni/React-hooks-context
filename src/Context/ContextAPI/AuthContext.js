import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
// class AuthContextProvider extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isAuthenticated: false,
//     };
//   }
//   toggleAuth = () => {
//     this.setState({ isAuthenticated: !this.state.isAuthenticated });
//   };
//   render() {
//     return (
//       <AuthContext.Provider
//         value={{ ...this.state, toggleAuth: this.toggleAuth }}
//       >
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }

export default AuthContextProvider;
