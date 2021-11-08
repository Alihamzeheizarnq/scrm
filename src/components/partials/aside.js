const Aside = () => {
    return (
        <>
            <div className="customizer d-none d-md-block "><a className="customizer-close" href="#"><i className="bx bx-x" /></a><a className="customizer-toggle" href="#"><i className="bx bx-cog bx bx-spin white" /></a><div className="customizer-content p-2 ps ps--active-y">
                <h4 className="text-uppercase mb-0 mt-n50">سفارشی سازی قالب</h4>
                <small>سفارشی سازی کنید و به صورت زنده مشاهده کنید.</small>
                <hr />
                {/* Theme options starts */}
                <h5 className="mt-n25">طرح قالب</h5>
                <div className="theme-layouts">
                    <div className="d-flex justify-content-start">
                        <div className="mx-50">
                            <fieldset>
                                <div className="radio">
                                    <input type="radio" name="layoutOptions" defaultValue="false" id="radio-light" className="layout-name" data-layout defaultChecked />
                                    <label htmlFor="radio-light">روشن</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="mx-50">
                            <fieldset>
                                <div className="radio">
                                    <input type="radio" name="layoutOptions" defaultValue="false" id="radio-dark" className="layout-name" data-layout="dark-layout" />
                                    <label htmlFor="radio-dark">تیره</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="mx-50">
                            <fieldset>
                                <div className="radio">
                                    <input type="radio" name="layoutOptions" defaultValue="false" id="radio-semi-dark" className="layout-name" data-layout="semi-dark-layout" />
                                    <label htmlFor="radio-semi-dark">نیمه تیره</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                {/* Theme options starts */}
                <hr />
                {/* Menu Colors Starts */}
                <div id="customizer-theme-colors">
                    <h5>رنگ های فهرست</h5>
                    <ul className="list-inline unstyled-list">
                        <li className="color-box bg-primary selected" data-color="theme-primary"> </li>
                        <li className="color-box bg-success" data-color="theme-success"> </li>
                        <li className="color-box bg-danger" data-color="theme-danger"> </li>
                        <li className="color-box bg-info" data-color="theme-info"> </li>
                        <li className="color-box bg-warning" data-color="theme-warning"> </li>
                        <li className="color-box bg-dark" data-color="theme-dark"> </li>
                    </ul>
                    <hr />
                </div>
                {/* Menu Colors Ends */}
                {/* Menu Icon Animation Starts */}
                <div id="menu-icon-animation" style={{ display: 'none' }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="icon-animation-title">
                            <h5 className="pt-25">انیمیشن آیکن ها</h5>
                        </div>
                        <div className="icon-animation-switch">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="icon-animation-switch" />
                                <label className="custom-control-label" htmlFor="icon-animation-switch" />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                {/* Menu Icon Animation Ends */}
                {/* Collapse sidebar switch starts */}
                <div className="collapse-sidebar d-flex justify-content-between align-items-center">
                    <div className="collapse-option-title">
                        <h5 className="pt-25">جمع کردن فهرست</h5>
                    </div>
                    <div className="collapse-option-switch">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="collapse-sidebar-switch" />
                            <label className="custom-control-label" htmlFor="collapse-sidebar-switch" />
                        </div>
                    </div>
                </div>
                {/* Collapse sidebar switch Ends */}
                <hr />
                {/* Navbar colors starts */}
                <div id="customizer-navbar-colors">
                    <h5>رنگ های نوار بالایی</h5>
                    <ul className="list-inline unstyled-list">
                        <li className="color-box bg-white border selected" data-navbar-default> </li>
                        <li className="color-box bg-primary" data-navbar-color="bg-primary"> </li>
                        <li className="color-box bg-success" data-navbar-color="bg-success"> </li>
                        <li className="color-box bg-danger" data-navbar-color="bg-danger"> </li>
                        <li className="color-box bg-info" data-navbar-color="bg-info"> </li>
                        <li className="color-box bg-warning" data-navbar-color="bg-warning"> </li>
                        <li className="color-box bg-dark" data-navbar-color="bg-dark"> </li>
                    </ul>
                    <small><strong>نکته :</strong> این گزینه تنها در حالت نوار ثابت و در هنگام اسکرول صفحه نمایش داده خواهد شد.</small>
                    <hr />
                </div>
                {/* Navbar colors starts */}
                {/* Navbar Type Starts */}
                <h5 className="mt-n25">نوع نوار بالایی</h5>
                <div className="navbar-type d-flex justify-content-start">
                    <div className="hidden-ele mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="navbarType" defaultValue="false" id="navbar-hidden" />
                                <label htmlFor="navbar-hidden">مخفی</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="navbarType" defaultValue="false" id="navbar-static" />
                                <label htmlFor="navbar-static">ایستا</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="navbarType" defaultValue="false" id="navbar-sticky" defaultChecked />
                                <label htmlFor="navbar-sticky">ثابت</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <hr />
                {/* Navbar Type Starts */}
                {/* Footer Type Starts */}
                <h5 className="mt-n25">نوع فوتر</h5>
                <div className="footer-type d-flex justify-content-start">
                    <div className="mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="footerType" defaultValue="false" id="footer-hidden" />
                                <label htmlFor="footer-hidden">مخفی</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="footerType" defaultValue="false" id="footer-static" defaultChecked />
                                <label htmlFor="footer-static">ایستا</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mx-50">
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="footerType" defaultValue="false" id="footer-sticky" />
                                <label htmlFor="footer-sticky" className>چسبان</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                {/* Footer Type Ends */}
                <hr />
                {/* Card Shadow Starts*/}
                <div className="card-shadow d-flex justify-content-between align-items-center py-25">
                    <div className="hide-scroll-title">
                        <h5 className="pt-25">سایه کارت</h5>
                    </div>
                    <div className="card-shadow-switch">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="card-shadow-switch" />
                            <label className="custom-control-label" htmlFor="card-shadow-switch" />
                        </div>
                    </div>
                </div>
                {/* Card Shadow Ends*/}
                <hr />
                {/* Hide Scroll To Top Starts*/}
                <div className="hide-scroll-to-top d-flex justify-content-between align-items-center py-25">
                    <div className="hide-scroll-title">
                        <h5 className="pt-25">مخفی سازی دکمه اسکرول به بالا</h5>
                    </div>
                    <div className="hide-scroll-top-switch">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="hide-scroll-top-switch" />
                            <label className="custom-control-label" htmlFor="hide-scroll-top-switch" />
                        </div>
                    </div>
                </div>
                {/* Hide Scroll To Top Ends*/}
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 374, left: 393 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 127 }} /></div></div>
            </div>


        </>
    )
}


export default Aside;