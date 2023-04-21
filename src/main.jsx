import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/routes/App";
import './index.css'
import AddNote from './components/routes/AddNote';
import RootLayout from './components/routes/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
    { path: '/', element: <App />, children: [
      { path: '/form', element: <AddNote /> },] 
    },
  ] 
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
