import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
    SSRProvider,
    Provider as AdobeProvider,
    defaultTheme,
} from '@adobe/react-spectrum';
import { wrapper } from '@/store';
import { Provider } from 'react-redux';
import { Layout } from '@/shared/ui/layout';
import { Header } from '@/widgets/header';

function App({ Component, ...pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);

    return (
        <Provider store={store}>
            <SSRProvider>
                <AdobeProvider theme={defaultTheme} locale={'ru'}>
                    <Layout header={<Header />}>
                        <Component {...props.pageProps} />
                    </Layout>
                </AdobeProvider>
            </SSRProvider>
        </Provider>
    );
}

export default App;
