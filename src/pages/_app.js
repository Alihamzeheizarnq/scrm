
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Aside from "../components/partials/aside";
import Footer from "../components/partials/footer";
import Header from "../components/partials/Header";
import Meta from "../components/partials/meta";
import SideBar from "../components/partials/sidebar";
import store from "../state/store";



import '../dist/css/vendors.min.css';
import '../dist/css/prism.min.css';
import '../dist/css/bootstrap.min.css';
import '../dist/css/bootstrap-extended.css';
import '../dist/css/colors.css';
import '../dist/css/components.css';
import '../dist/css/themes/dark-layout.css';
import '../dist/css/themes/semi-dark-layout.css';
import '../dist/css/vertical-menu.css';
import '../dist/css/authentication.css'
import '../dist/css/loader.css'
import '../dist/css/custom.css';


import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        if (router.asPath == '/login') {
            document.body.classList.add(
                'boxicon-layout',
                'no-card-shadow',
                '1-column',
                'blank-page',
                'bg-full-screen-image'
            )
        } else {
            document.body.setAttribute('class', 'vertical-layout vertical-menu-modern 2-columns  navbar-sticky footer-static')
        }


    }, [])

    const router = useRouter();


    return (
        <>
            <Provider store={store}>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <Meta />
                </Head>
              
                

                {
                    router.asPath == '/login' ? (
                        <>
                            <Component {...pageProps} />
                        </>
                    ) : (
                        <>
                            <div className="header-navbar-shadow" />
                            <Header />
                            <SideBar />
                            <Aside />

                            <div className="app-content content">
                                <div className="content-overlay" />

                                <Component {...pageProps} />
                            </div>
                            <div className="sidenav-overlay" />
                            <div className="drag-target" />

                            <Footer />

                        </>
                    )
                }
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

            </Provider>
        </>
    )

}
export default MyApp