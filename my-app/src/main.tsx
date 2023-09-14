import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import 'bootstrap/dist/css/bootstrap.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
       <App />
    </ErrorBoundary>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// component tree 
