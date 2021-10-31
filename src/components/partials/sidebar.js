import Link from 'next/link'

const SideBar = () => {



    const handleSideBar = (e) => {
        if (e.target.tagName == 'A' || e.target.parentElement.tagName == 'A') {
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
                                        <span className="font-size-xl text-dual-primary-dark"> </span><span className="font-size-xl text-primary">ثریا </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-side content-side-full">
                            <ul className="nav-main" id="nav-main-sidebar">
                                <li>
                                    <a className="active" href="#">
                                        <i className="si si-cup" />
                                        <span className="sidebar-mini-hide">داشبورد</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-submenu" onClick={handleSideBar}>
                                        <i className="si si-puzzle" />
                                        <span className="sidebar-mini-hide">کاربران</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <Link href="/users/create">
                                                <a>ایجاد کاربر</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/users">
                                                <a>لیست کاربران</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/users/category">
                                                <a>دسته بندی </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/users/familiarity">
                                                <a>شیوه آشنایی</a>
                                            </Link>
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