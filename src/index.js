import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import {router} from './router.js'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <RouterProvider  router={router} />
  </StrictMode>
);