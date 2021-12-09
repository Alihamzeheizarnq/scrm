import { connect } from 'react-redux'

const App = () => {
    return (
        <>
            <div className="content-area-wrapper">
                <div className="sidebar-left">
                    <div className="sidebar">
                        {/* app chat user profile left sidebar start */}
                        <div className="chat-user-profile">
                            <header className="chat-user-profile-header text-center border-bottom">
                                <span className="chat-profile-close">
                                    <i className="bx bx-x" />
                                </span>
                                <div className="my-2">
                                    <div className="avatar">
                                        <img
                                            src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                            alt="user_avatar"
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                    <h5 className="mb-0">John Doe</h5>
                                    <span>Designer</span>
                                </div>
                            </header>
                            <div className="chat-user-profile-content">
                                <div className="chat-user-profile-scroll ps ps__rtl">
                                    <h6 className="text-uppercase mb-1">
                                        ABOUT
                                    </h6>
                                    <p className="mb-2">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content .
                                    </p>
                                    <h6>PERSONAL INFORAMTION</h6>
                                    <ul className="list-unstyled mb-2">
                                        <li className="mb-25">
                                            email@gmail.com
                                        </li>
                                        <li>+1(789) 950 -7654</li>
                                    </ul>
                                    <h6 className="text-uppercase mb-1">
                                        CHANNELS
                                    </h6>

                                    <h6 className="text-uppercase mb-1">
                                        SETTINGS
                                    </h6>
                                    <ul className="list-unstyled">
                                        <li className="mb-50 ">
                                            <a
                                                href="javascript:void(0);"
                                                className="d-flex align-items-center"
                                            >
                                                <i className="bx bx-tag mr-50" />
                                                Add Tag
                                            </a>
                                        </li>
                                        <li className="mb-50 ">
                                            <a
                                                href="javascript:void(0);"
                                                className="d-flex align-items-center"
                                            >
                                                <i className="bx bx-star mr-50" />
                                                Important Contact
                                            </a>
                                        </li>
                                        <li className="mb-50 ">
                                            <a
                                                href="javascript:void(0);"
                                                className="d-flex align-items-center"
                                            >
                                                <i className="bx bx-image-alt mr-50" />
                                                Shared Documents
                                            </a>
                                        </li>
                                        <li className="mb-50 ">
                                            <a
                                                href="javascript:void(0);"
                                                className="d-flex align-items-center"
                                            >
                                                <i className="bx bx-trash-alt mr-50" />
                                                Deleted Documents
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="d-flex align-items-center"
                                            >
                                                <i className="bx bx-block mr-50" />
                                                Blocked Contact
                                            </a>
                                        </li>
                                    </ul>
                                    <div
                                        className="ps__rail-x"
                                        style={{ left: 0, bottom: 0 }}
                                    >
                                        <div
                                            className="ps__thumb-x"
                                            tabIndex={0}
                                            style={{ left: 0, width: 0 }}
                                        />
                                    </div>
                                    <div
                                        className="ps__rail-y"
                                        style={{ top: 0, right: 281 }}
                                    >
                                        <div
                                            className="ps__thumb-y"
                                            tabIndex={0}
                                            style={{ top: 0, height: 0 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* app chat user profile left sidebar ends */}
                        {/* app chat sidebar start */}
                        <div className="chat-sidebar card">
                            <span className="chat-sidebar-close">
                                <i className="bx bx-x" />
                            </span>
                            <div className="chat-sidebar-search">
                                <div className="d-flex align-items-center">
                                    <div className="chat-sidebar-profile-toggle">
                                        <div className="avatar">
                                            <img
                                                src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                                alt="user_avatar"
                                                height={36}
                                                width={36}
                                            />
                                        </div>
                                    </div>
                                    <fieldset className="form-group position-relative has-icon-left mx-75 mb-0">
                                        <input
                                            type="text"
                                            className="form-control round"
                                            id="chat-search"
                                            placeholder="Search"
                                        />
                                        <div className="form-control-position">
                                            <i className="bx bx-search-alt text-dark" />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="chat-sidebar-list-wrapper pt-2 ps ps__rtl ps--active-y">
                                <h6 className="px-2 pt-2 pb-25 mb-0">
                                    پیام ها
                                </h6>
                                <ul className="chat-sidebar-list">
                                    <li className>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar m-0 mr-50">
                                                <img
                                                    src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                    height={36}
                                                    width={36}
                                                    alt="sidebar user image"
                                                />
                                                <span className="avatar-status-busy" />
                                            </div>
                                            <div className="chat-sidebar-name">
                                                <h6 className="mb-0">
                                                    علی حمزه ای
                                                </h6>
                                                <span className="text-muted">
                                                    Cake pie
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar m-0 mr-50">
                                                <img
                                                    src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                                    height={36}
                                                    width={36}
                                                    alt="sidebar user image"
                                                />
                                                <span className="avatar-status-online" />
                                            </div>
                                            <div className="chat-sidebar-name">
                                                <h6 className="mb-0">
                                                    توحید ناطقی
                                                </h6>
                                                <span className="text-muted">
                                                    jelly jelly
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div
                                    className="ps__rail-x"
                                    style={{ left: 0, bottom: 0 }}
                                >
                                    <div
                                        className="ps__thumb-x"
                                        tabIndex={0}
                                        style={{ left: 0, width: 0 }}
                                    />
                                </div>
                                <div
                                    className="ps__rail-y"
                                    style={{ top: 0, height: 712, right: 281 }}
                                >
                                    <div
                                        className="ps__thumb-y"
                                        tabIndex={0}
                                        style={{ top: 0, height: 595 }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* app chat sidebar ends */}
                    </div>
                </div>
                <div className="content-right">
                    <div className="content-overlay" />
                    <div className="content-wrapper">
                        <div className="content-header row"></div>
                        <div className="content-body">
                            {/* app chat overlay */}
                            <div className="chat-overlay" />
                            {/* app chat window start */}
                            <section className="chat-window-wrapper">
                                <div className="chat-start d-none">
                                    <span className="bx bx-message chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1" />
                                    <h4 className="d-none d-lg-block py-50 text-bold-500">
                                        Select a contact to start a chat!
                                    </h4>
                                    <button className="btn btn-light-primary chat-start-text chat-sidebar-toggle d-block d-lg-none py-50 px-1">
                                        Start Conversation!
                                    </button>
                                </div>
                                <div className="chat-area">
                                    <div className="chat-header">
                                        <header className="d-flex justify-content-between align-items-center border-bottom px-1 py-75">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-sidebar-toggle d-block d-lg-none mr-1">
                                                    <i className="bx bx-menu font-large-1 cursor-pointer" />
                                                </div>
                                                <div className="avatar chat-profile-toggle m-0 mr-1">
                                                    <img
                                                        src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                        alt="avatar"
                                                        height={36}
                                                        width={36}
                                                    />
                                                    <span className="avatar-status-busy" />
                                                </div>
                                                <h6 className="mb-0">
                                                    Elizabeth Elliott
                                                </h6>
                                            </div>
                                            <div className="chat-header-icons">
                                                <span className="chat-icon-favorite">
                                                    <i className="bx bx-star font-medium-5 cursor-pointer" />
                                                </span>
                                                <span className="dropdown">
                                                    <i
                                                        className="bx bx-dots-vertical-rounded font-medium-4 ml-25 cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                                        id="dropdownMenuButton"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        role="menu"
                                                    ></i>
                                                    <span
                                                        className="dropdown-menu dropdown-menu-right"
                                                        aria-labelledby="dropdownMenuButton"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="JavaScript:void(0);"
                                                        >
                                                            <i className="bx bx-pin mr-25" />
                                                            Pin to top
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="JavaScript:void(0);"
                                                        >
                                                            <i className="bx bx-trash mr-25" />
                                                            Delete chat
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="JavaScript:void(0);"
                                                        >
                                                            <i className="bx bx-block mr-25" />
                                                            Block
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </header>
                                    </div>
                                    {/* chat card start */}
                                    <div className="card chat-wrapper shadow-none">
                                        <div className="card-body chat-container ps ps__rtl ps--active-y">
                                            <div className="chat-content">
                                                <div className="chat">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                How can we help?
                                                                We're here for
                                                                you! 😄
                                                            </p>
                                                            <span className="chat-time">
                                                                7:45 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out? 🤔
                                                            </p>
                                                            <span className="chat-time">
                                                                7:50 AM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4 🤩
                                                                compatible.
                                                            </p>
                                                            <span className="chat-time">
                                                                7:58 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="badge badge-pill badge-light-secondary my-1">
                                                    Yesterday
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>Absolutely!</p>
                                                            <span className="chat-time">
                                                                8:00 AM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>
                                                                Stack admin is
                                                                the responsive
                                                                bootstrap 4
                                                                admin template.
                                                            </p>
                                                            <span className="chat-time">
                                                                8:01 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                Looks clean and
                                                                fresh UI. 😃
                                                            </p>
                                                            <span className="chat-time">
                                                                10:12 AM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>
                                                                It's perfect for
                                                                my next project.
                                                            </p>
                                                            <span className="chat-time">
                                                                10:15 AM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>
                                                                How can I
                                                                purchase 🤑 it?
                                                            </p>
                                                            <span className="chat-time">
                                                                10:18 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                Thanks 🤝 , from
                                                                ThemeForest.
                                                            </p>
                                                            <span className="chat-time">
                                                                10:20 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                I will purchase
                                                                it for sure. 👍
                                                            </p>
                                                            <span className="chat-time">
                                                                3:32 PM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>Thanks.</p>
                                                            <span className="chat-time">
                                                                3:33 PM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-avatar">
                                                        <a className="avatar m-0">
                                                            <img
                                                                src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                                                                alt="avatar"
                                                                height={36}
                                                                width={36}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-message">
                                                            <p>
                                                                Great, Feel free
                                                                to get in touch
                                                                on
                                                            </p>
                                                            <span className="chat-time">
                                                                3:34 AM
                                                            </span>
                                                        </div>
                                                        <div className="chat-message">
                                                            <p>
                                                                https://pixinvent.ticksy.com/
                                                            </p>
                                                            <span className="chat-time">
                                                                3:35 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="ps__rail-x"
                                                style={{ left: 0, bottom: 0 }}
                                            >
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{
                                                        left: 0,
                                                        width: 0,
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="ps__rail-y"
                                                style={{
                                                    top: 0,
                                                    right: 1053,
                                                    height: 642,
                                                }}
                                            >
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{
                                                        top: 0,
                                                        height: 381,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer chat-footer border-top px-2 pt-1 pb-0 mb-1">
                                            <form
                                                className="d-flex align-items-center"
                                                onsubmit="chatMessagesSend();"
                                                action="javascript:void(0);"
                                            >
                                                <i className="bx bx-face cursor-pointer" />
                                                <i className="bx bx-paperclip ml-1 cursor-pointer" />
                                                <input
                                                    type="text"
                                                    className="form-control chat-message-send mx-1"
                                                    placeholder="Type your message here..."
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary glow send d-lg-flex"
                                                >
                                                    <i className="bx bx-paper-plane" />
                                                    <span className="d-none d-lg-block ml-1">
                                                        Send
                                                    </span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* chat card ends */}
                                </div>
                            </section>
                            {/* app chat window ends */}
                            {/* app chat profile right sidebar start */}
                            <section className="chat-profile">
                                <header className="chat-profile-header text-center border-bottom">
                                    <span className="chat-profile-close">
                                        <i className="bx bx-x" />
                                    </span>
                                    <div className="my-2">
                                        <div className="avatar">
                                            <img
                                                src="../../../app-assets/images/portrait/small/avatar-s-26.jpg"
                                                alt="chat avatar"
                                                height={100}
                                                width={100}
                                            />
                                        </div>
                                        <h5 className="app-chat-user-name mb-0">
                                            Elizabeth Elliott
                                        </h5>
                                        <span>Devloper</span>
                                    </div>
                                </header>
                                <div className="chat-profile-content p-2 ps ps__rtl">
                                    <h6 className="mt-1">ABOUT</h6>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content.
                                    </p>
                                    <h6 className="mt-2">
                                        PERSONAL INFORMATION
                                    </h6>
                                    <ul className="list-unstyled">
                                        <li className="mb-25">
                                            email@gmail.com
                                        </li>
                                        <li>+1(789) 950-7654</li>
                                    </ul>
                                    <div
                                        className="ps__rail-x"
                                        style={{ left: 0, bottom: 0 }}
                                    >
                                        <div
                                            className="ps__thumb-x"
                                            tabIndex={0}
                                            style={{ left: 0, width: 0 }}
                                        />
                                    </div>
                                    <div
                                        className="ps__rail-y"
                                        style={{ top: 0, right: 281 }}
                                    >
                                        <div
                                            className="ps__thumb-y"
                                            tabIndex={0}
                                            style={{ top: 0, height: 0 }}
                                        />
                                    </div>
                                </div>
                            </section>
                            {/* app chat profile right sidebar ends */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps({ req }) {
    if (!req.auth) {
        return req.redirectTo('/login')
    }
    return {
        props: {},
    }
}

export default connect()(App)
