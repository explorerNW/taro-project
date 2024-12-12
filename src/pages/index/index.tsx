import { useLoad } from '@tarojs/taro';

import { Provider } from 'react-redux';
import store from '@/redux';
import { routes, RouterProvider, Links } from '@/router';

import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Index Page loaded.');
  });

  return (
    <Provider store={store}>
      <RouterProvider route={routes()}>
        <Links />
      </RouterProvider>
    </Provider>
  );
}
