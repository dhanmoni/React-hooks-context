import React, { Component } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

// const BookList = () => {
//   return (
// <div className="book-list">
//   <ul>
//     <li>The way of kings</li>
//     <li>The name of the wind</li>
//     <li>The final empire</li>
//   </ul>
// </div>
//   );
// };

//CONTEXT USING CLASS COMPONENT:

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export default BookList;
