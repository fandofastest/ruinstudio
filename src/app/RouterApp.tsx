import App from './App';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import NotFound from './NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-of-service', element: <TermsOfService /> },
  { path: '*', element: <NotFound /> },
]);

export default function RouterApp() {
  return <RouterProvider router={router} />;
}
