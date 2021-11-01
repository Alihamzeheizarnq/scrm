
import Head from "next/head";
import { Provider } from "react-redux";
import Aside from "../components/partials/aside";
import Footer from "../components/partials/footer";
import Header from "../components/partials/Header";
import Meta from "../components/partials/meta";
import SideBar from "../components/partials/sidebar";

import '../dist/css/codebase.min.css';
import '../dist/css/custom.css';
import store from "../state/store";

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Provider store={store}>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <Meta />
                </Head>
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
                </div>
            </Provider>
        </>
    )

}
export default MyApp