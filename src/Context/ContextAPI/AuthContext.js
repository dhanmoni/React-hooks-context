import React, { createContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, dispatch] = useReducer(AuthReducer, false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
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
