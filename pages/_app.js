import Layout from '@/components/layout' 
import '../styles/globals.css';
  
export default function  MyWebsite({ Component, pageProps }) {
    return (
        <Layout>
        <Component {...pageProps} /> 
        </Layout>
    )
  }