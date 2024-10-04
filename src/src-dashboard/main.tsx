import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AdminApp from './AdminApp.tsx';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AdminApp />
    </BrowserRouter>
  </StrictMode>
)
