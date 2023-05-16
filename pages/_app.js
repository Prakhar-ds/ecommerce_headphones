import React, { useEffect } from 'react';
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext';
import '../styles/globals.css'
import SignInSide from './auth/login';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (typeof window === 'undefined') {
    return <SignInSide />
  }
  return (
    <StateContext>
      {localStorage && localStorage.getItem("user") ? <Layout>
        <Component {...pageProps} />
      </Layout> : <SignInSide />}
    </StateContext>
  );
}

export default MyApp
