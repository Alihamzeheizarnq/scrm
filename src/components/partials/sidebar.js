import Link from 'next/link'
import ActiveLink from '../utils/ActiveLink';
import { OpenMenu } from '../utils/ActiveNav';

const SideBar = () => {



    const handleSideBar = (e) => {
        if (e.target.tagName == 'A' || e.target.parentElement.tagName == 'A') {
            console.log(e);
            const target = e.target.tagName == 'A' ? e.target : e.target.parentElement;
            const parent = target.parentElement;
            parent.classList.contains('open') ? parent.classList.remove('open') : parent.classList.add('open');

            const ul = document.querySelector('#nav-main-sidebar');
            const index = Array.from(ul.children).indexOf(parent);


            let number = 0;
            for (const iterator of ul.children) {
                if (number != index) {
                    iterator.classList.remove('open')
                }
                number++;
            }
        }

    }
    return (
        <>

            <nav id="sidebar" aria-label="Main Navigation">
                <div className="bg-header-dark">
                    <div className="content-header bg-white-10">
                        <a className="font-w600 text-white tracking-wide" href>
                            <span className="smini-visible">
                                D<span className="opacity-75">x</span>
                            </span>
                            <span className="smini-hidden">
                                Dash<span className="opacity-75">mix</span>
                            </span>
                        </a>

                        <div>

                            <a className="js-class-toggle text-white-75" data-target="#sidebar-style-toggler" data-class="fa-toggle-off fa-toggle-on" onclick="Dashmix.layout('sidebar_style_toggle');Dashmix.layout('header_style_toggle');" href="javascript:void(0)">
                                <i className="fa fa-toggle-off" id="sidebar-style-toggler" />
                            </a>

                            <a className="d-lg-none text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                                <i className="fa fa-times-circle" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="js-sidebar-scroll" data-simplebar="init">
                    <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                            <div className="simplebar-offset" style={{ left: 0, bottom: 0 }}>
                                <div className="simplebar-content-wrapper" style={{ height: '100%', overflow: 'hidden' }}>
                                    <div className="simplebar-content" style={{ padding: 0 }}>
                                        <div className="content-side">
                                            <ul className="nav-main" id="nav-main-sidebar">

                                                <li className={`nav-main-item nav-custom ${OpenMenu(['/users/create', '/users', '/users/category', '/users/familiarity'])}`}>
                                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href={true} onClick={handleSideBar}>
                                                        <i className="nav-main-link-icon fa fa-user" />
                                                        <span className="nav-main-link-name">مدیریت کاربران</span>
                                                    </a>

                                                    <ul className="nav-main-submenu">
                                                        <li className="nav-main-item nav-main-custom ">
                                                            <ActiveLink activeClassName="nav-active" href="/users/create" >
                                                                <a className="nav-main-link">
                                                                    <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                                    <span className="nav-main-link-name">ایجاد کاربر</span>
                                                                </a>
                                                            </ActiveLink>
                                                        </li>
                                                        <li className="nav-main-item nav-main-custom">
                                                            <ActiveLink activeClassName="nav-active" href="/users">
                                                                <a className="nav-main-link" >
                                                                    <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                                    <span className="nav-main-link-name">لیست کاربران</span>
                                                                </a>
                                                            </ActiveLink>
                                                        </li>
                                                        <li className="nav-main-item nav-main-custom">
                                                            <ActiveLink activeClassName="nav-active" href="/users/category">
                                                                <a className="nav-main-link" >
                                                                    <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                                    <span className="nav-main-link-name">دسته بندی کاربران</span>
                                                                </a>
                                                            </ActiveLink>
                                                        </li>
                                                        <li className="nav-main-item nav-main-custom">
                                                            <ActiveLink activeClassName="nav-active" href="/users/familiarity">
                                                                <a className="nav-main-link" >
                                                                    <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                                    <span className="nav-main-link-name">شیوه آشنایی</span>
                                                                </a>
                                                            </ActiveLink>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </div>
                                        {/* END Side Navigation */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="simplebar-placeholder" style={{ width: 'auto', height: 166 }} /></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ width: 0, display: 'none' }} /></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ height: 0, display: 'none' }} /></div></div>
                {/* END Sidebar Scrolling */}
            </nav>


        </>

    )
}



export default SideBar;

