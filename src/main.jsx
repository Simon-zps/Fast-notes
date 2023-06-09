import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/routes/App";
import './index.css'
import AddNote from './components/routes/AddNote';
import RootLayout from './components/routes/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as newNoteAction } from './components/routes/AddNote';
import { loader as notesUpdating } from './components/routes/App';
import NoteOverlay from './components/routes/NoteOverlay';
import { loader as noteOverlayLoader } from './components/routes/NoteOverlay';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
    { 
      path: '/', 
      element: <App />, 
      loader: notesUpdating,
      children: [
        { path: '/form', element: <AddNote />, action: newNoteAction },
        { path: '/:id', element: <NoteOverlay/>, loader: noteOverlayLoader },
    ] 
    },
  ] 
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
