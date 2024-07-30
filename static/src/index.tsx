import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import ErrorPage from './error-page';
import Biography from './Biography';
import Projects from './Projects';
import Cities from './Cities';
import Music from './Music';

const basePath = "/my-page"

export const routes = [
	{
	  path: basePath,
	  element: <App />,
    errorElement: <ErrorPage />,
	},
  {
    path: basePath + "/bio",
    element: <Biography />,
  },
  {
    path: basePath + "/projects",
    element: <Projects />,
  },
  {
    path: basePath + "/cities",
    element: <Cities />,
  },
  {
    path: basePath + "/music",
    element: <Music />,
  },
  ]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
