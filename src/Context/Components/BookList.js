import React, { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import { BookContext } from "../ContextAPI/BookContext";

//CONTEXT USING FUNCTIONAL COMPONENT WITH USECONTEXT API

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, dispatch } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, backgroundColor: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li
              key={book.id}
              style={{
                backgroundColor: theme.ui,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {book.title}
              <span
                className="cross"
                onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
              >
                X
              </span>
            </li>
          );
        })}
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
