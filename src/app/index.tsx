import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/router';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context';
import { setupStore } from './store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
    </Provider>
  </AuthContextProvider>,
);
