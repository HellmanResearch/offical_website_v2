import Layout from '@/layout';
import { lazy, ReactNode, Suspense } from 'react';
import { RouterPath } from './RouterConfig';
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<></>}>{children}</Suspense>;
};

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: lazyLoad(<Home />) },
      { path: RouterPath.home, element: lazyLoad(<Home />) },
    ],
  },
  { path: '/*', element: lazyLoad(<NotFound />) },
];

export default router;
