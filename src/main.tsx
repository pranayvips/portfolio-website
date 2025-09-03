import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFoundPage from './pages/404.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        {/* ✅ Define your routes */}
        <Route path="/" element={<App />} />

        {/* ✅ Catch-all 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  </BrowserRouter>,
)
