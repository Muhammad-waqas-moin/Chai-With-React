import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
function MyApp() {
  return <h2>Chai with React !!</h2>;
}
const anotherElement = (
  <a href="https://www.google.com/" target="_blank">
    vist Google
  </a>
);
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };
const user = "Developer | waqas";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com" },
  "Click Me to Visit Google ",
  user
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // reactElement
  // anotherElement
  // <a href="https://www.google.com/" target="_blank">
  //   vist Google
  // </a>

  // App()
  // MyApp()
  // reactElement
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
