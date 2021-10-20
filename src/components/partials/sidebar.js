import { useEffect, useRef } from "react";

const SideBar = () => {



    const handleSideBar = (e) => {
        console.log(e)
    }
    return (
        <>
            <nav id="sidebar">
                <div id="sidebar-scroll">
                    <div className="sidebar-content">
                        <div className="content-header content-header-fullrow px-15">
                            <div className="content-header-section sidebar-mini-visible-b">
                                <span className="
                                    content-header-item
                                    font-w700 font-size-xl
                                    float-right
                                    animated
                                    fadeIn
                                ">
                                    <span className="text-dual-primary-dark">c</span><span className="text-primary">b</span>
                                </span>
                            </div>
                            <div className="
                                content-header-section
                                text-center
                                align-parent
                                sidebar-mini-hidden
                                ">
                                <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-l"  >
                                    <i className="fa fa-times text-danger" />
                                </button>
                                <div className="content-header-item">
                                    <a className="link-effect font-w700" href="#">
                                        <i className="si si-fire text-primary" />
                                        <span className="font-size-xl text-dual-primary-dark">node</span><span className="font-size-xl text-primary">panel</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-side content-side-full">
                            <ul className="nav-main">
                                <li>
                                    <a className="active" href="#">
                                        <i className="si si-cup" />
                                        <span className="sidebar-mini-hide">داشبورد</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-submenu" onClick={handleSideBar}>
                                        <i className="si si-puzzle" />
                                        <span className="sidebar-mini-hide">پست ها</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">ایجاد پست</a>
                                        </li>
                                        <li>
                                            <a href="#">لیست پست ها</a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="nav-submenu"  onClick={handleSideBar}>
                                        <i className="si si-puzzle" />
                                        <span className="sidebar-mini-hide">پست ها</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">ایجاد پست</a>
                                        </li>
                                        <li>
                                            <a href="#">لیست پست ها</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default SideBar;