import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './Layouts/MainLayout';

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
  ]);
  return routeElements;
}
