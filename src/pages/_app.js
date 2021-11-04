
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

import '../dist/css/codebase.min.css';
import '../dist/css/custom.css';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

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
                            <div id="page-container"
                                className="sidebar-o sidebar-r
                        side-scroll
                        page-header-modern
                        main-content-boxed    rtl-support">

                                <Aside />

                                <SideBar />

                                <Header />

                                <Component {...pageProps} />

                                <Footer />
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
                            </div>
                        </>
                    )
                }

            </Provider>
        </>
    )

}
export default MyApp