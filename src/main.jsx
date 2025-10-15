import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
<home>  
<RouterProvider router={router} />
</StrictMode>,

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />
  </StrictMode>,
)