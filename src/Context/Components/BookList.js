import React, { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

//CONTEXT USING FUNCTIONAL COMPONENT WITH USECONTEXT API

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, backgroundColor: theme.bg }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>The way of kings</li>
        <li style={{ backgroundColor: theme.ui }}>The name of the wind</li>
        <li style={{ backgroundColor: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
};

//CONTEXT USING CLASS COMPONENT:

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
// <div
//   className="book-list"
//   style={{ color: theme.syntax, backgroundColor: theme.bg }}
// >
//   <ul>
//     <li style={{ backgroundColor: theme.ui }}>The way of kings</li>
//     <li style={{ backgroundColor: theme.ui }}>The name of the wind</li>
//     <li style={{ backgroundColor: theme.ui }}>The final empire</li>
//   </ul>
// </div>
//     );
//   }
// }

//CONTEXT USING THEMECONTEXT.CONSUMER WITH CLASS COMPONENT:

// class BookList extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div
//               className="book-list"
//               style={{ color: theme.syntax, backgroundColor: theme.bg }}
//             >
//               <ul>
//                 <li style={{ backgroundColor: theme.ui }}>The way of kings</li>
//                 <li style={{ backgroundColor: theme.ui }}>
//                   The name of the wind
//                 </li>
//                 <li style={{ backgroundColor: theme.ui }}>The final empire</li>
//               </ul>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

export default BookList;
