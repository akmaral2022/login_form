import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Entered } from './pages/Entered';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/entered',
    element: <Entered />
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

