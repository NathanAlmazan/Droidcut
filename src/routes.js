import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
//
import SuspenseLoader from './components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const Login = Loader(lazy(() => import('./pages/Login')));
const Register = Loader(lazy(() => import('./pages/Register')));
const DashboardApp = Loader(lazy(() => import('./pages/DashboardApp')));
const Products = Loader(lazy(() => import('./pages/Products')));
const Jobs = Loader(lazy(() => import('./pages/Jobs')));
const NotFound = Loader(lazy(() => import('./pages/Page404')));
const CreateHaircut = Loader(lazy(() => import('./pages/Haircuts/create')));
const EditHaircut = Loader(lazy(() => import('./pages/Haircuts/edit')));
const ForgotPassword = Loader(lazy(() => import('./pages/ForgotPassword')));
const History = Loader(lazy(() => import('./pages/History')));
const Schedule = Loader(lazy(() => import('./pages/Schedule')));
const Customers = Loader(lazy(() => import('./pages/Customers')));

const DashboardLayout = Loader(lazy(() => import('./layouts/dashboard')));
const LogoOnlyLayout = Loader(lazy(() => import('./layouts/LogoOnlyLayout')));


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'haircut/create', element: <CreateHaircut /> },
        { path: 'haircut/edit/:uid', element: <EditHaircut /> },
        { path: 'schedules', element: <Schedule /> },
        { path: 'jobs', element: <Jobs /> },
        { path: 'history', element: <History /> },
        { path: 'customers', element: <Customers /> },
        { path: 'products', element: <Products /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'resetPassword', element: <ForgotPassword /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
