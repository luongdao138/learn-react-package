import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import * as ReactDOMClient from 'react-dom/client';
import { render } from "react-dom";
import TaskProvider from "./context/TaskContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const container = document.getElementById("root");

render(
  <DndProvider backend={HTML5Backend}>
    <TaskProvider>
      <App />
    </TaskProvider>
  </DndProvider>,
  container
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
