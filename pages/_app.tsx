import "../styles/globals.css";
// import 'tailwindcss/tailwind.css'
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import {
  RecoilRoot,
} from 'recoil';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<RecoilRoot><Component {...pageProps} /></RecoilRoot>);
}
export default MyApp;