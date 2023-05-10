import{ StrictMode } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

const rootString = renderToString(<App />);
const rootElement  = document.getElementById('root') as HTMLElement
rootElement.innerHTML = rootString;
const root = hydrateRoot(rootElement, <App />);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
