import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Router } from 'next/router';
import {useState} from "react";
import Layout from '@/components/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/libs/theme';
import {QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
import {ReactNode, ReactElement} from "react";
import {Provider} from 'react-redux';
import {store} from "@/libs/redux/store";


const queryClient = new QueryClient()

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ProviderWrapper>
        <Content Component={Component} pageProps={pageProps} router={router}/>
    </ProviderWrapper>
  );
}

type Props = {
    children: ReactNode | ReactElement
}


function Content({Component, pageProps, router}: AppProps) {
    const [loading, setLoading] = useState(false);

    if (router.pathname === '/login')
        return (
            <>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </>
        );

    Router.events.on("routeChangeStart", (url) => setLoading(true));
    Router.events.on("routeChangeComplete", (url) => setLoading(false));
    Router.events.on("routeChangeError", (url) => setLoading(false));

    return (
        <>
            <Layout loading={loading}>
                <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
}

function ProviderWrapper({children}: Props) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ThemeProvider>
        </Provider>
    );
}