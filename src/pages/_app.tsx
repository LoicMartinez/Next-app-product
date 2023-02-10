import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Router, useRouter } from 'next/router';
import {useState} from "react";
import Layout from '@/components/Layout';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { theme } from '@/libs/theme';
import {QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
import * as React from "react";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (router.pathname === '/login')
    return <Component {...pageProps} />

  Router.events.on("routeChangeStart", (url) => setLoading(true))
  Router.events.on("routeChangeComplete", (url) => setLoading(false))
  Router.events.on("routeChangeError", (url) => setLoading(false))

  return (
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>

            <Layout loading={loading}>
                <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </ThemeProvider>
  )
}
