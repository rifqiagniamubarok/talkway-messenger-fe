import { store } from '@/store/store';
import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}
