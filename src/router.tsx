import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import { View } from '@tarojs/components';

import Home from './pages/home';
import Details from './pages/details';
import { useUserInfo } from './redux/utils';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { userInfo } = useUserInfo();
  const location = useLocation();
  if (userInfo.login) {
    return children;
  } else {
    return <Navigate to='/' replace state={{ from: location }}></Navigate>;
  }
};

export const Links = () => {
  return (
    <View>
      <Link to='/pages/home/index'>home</Link>
    </View>
  );
};

export const RouterProvider = ({
  children,
  route,
}: {
  children: ReactElement;
  route: ReactElement;
}) => {
  return (
    <BrowserRouter>
      {children}
      {route}
    </BrowserRouter>
  );
};

export const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/pages/home/index' element={<Home />}></Route>
      <Route
        path='/pages/details/index'
        element={
          <AuthGuard>
            <Details />
          </AuthGuard>
        }
      ></Route>
    </Routes>
  );
};
