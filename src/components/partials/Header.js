const Header = () => {
    return (
        <>
            <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
                <div className="navbar-wrapper">
                    <div className="navbar-container content">
                        <div className="navbar-collapse" id="navbar-mobile">
                            <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ficon bx bx-menu" /></a></li>
                                </ul>
                                <ul className="nav navbar-nav bookmark-icons">
                                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="sk-layout-1-column.html" data-toggle="tooltip" data-placement="bottom" title="1 ستون"><i className="ficon bx bx-file" /></a></li>
                                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="sk-layout-2-columns.html" data-toggle="tooltip" data-placement="bottom" title="2 ستون"><i className="ficon bx bx-sidebar" /></a></li>
                                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="sk-layout-static.html" data-toggle="tooltip" data-placement="bottom" title="طرح ایستا"><i className="ficon bx bx-align-middle" /></a></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon bx bx-star warning" /></a>
                                        <div className="bookmark-input search-input">
                                            <div className="bookmark-input-icon"><i className="bx bx-search primary" /></div>
                                            <input className="form-control input" type="text" placeholder="جستجو ..." tabIndex={0} data-search="starter-list" />
                                            <ul className="search-list" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="nav navbar-nav float-right">
                                <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-ir" /><span className="selected-language">فارسی</span></a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#" data-language="fa"><i className="flag-icon flag-icon-ir mr-50" /> فارسی</a><a className="dropdown-item" href="#" data-language="en"><i className="flag-icon flag-icon-us mr-50" /> انگلیسی</a><a className="dropdown-item" href="#" data-language="fr"><i className="flag-icon flag-icon-fr mr-50" /> فرانسوی</a><a className="dropdown-item" href="#" data-language="de"><i className="flag-icon flag-icon-de mr-50" /> آلمانی</a><a className="dropdown-item" href="#" data-language="pt"><i className="flag-icon flag-icon-pt mr-50" /> پرتغالی</a></div>
                                </li>
                                <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i className="ficon bx bx-fullscreen" /></a></li>
                                <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i className="ficon bx bx-search" /></a>
                                    <div className="search-input">
                                        <div className="search-input-icon"><i className="bx bx-search primary" /></div>
                                        <input className="input" type="text" placeholder="جستجو ..." tabIndex={-1} data-search="starter-list" />
                                        <div className="search-input-close"><i className="bx bx-x" /></div>
                                        <ul className="search-list" />
                                    </div>
                                </li>
                                <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon bx bx-bell" /><span className="badge badge-pill badge-primary badge-up">5</span></a>
                                    <ul className="dropdown-menu dropdown-menu-media">
                                        <li className="dropdown-menu-header">
                                            <div className="dropdown-header px-1 py-75 d-flex justify-content-between"><span className="notification-title">7 اعلان جدید</span><span className="text-bold-400 cursor-pointer">علامت خوانده شده به همه</span></div>
                                        </li>
                                        <li className="scrollable-container media-list"><a className="d-flex justify-content-between" href="javascript:void(0)">
                                            <div className="media d-flex align-items-center">
                                                <div className="media-left pr-0">
                                                    <div className="avatar mr-1 m-0"><img src="../../assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height={39} width={39} /></div>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="media-heading"><span className="text-bold-500">تبریک بابت دریافت جوایز</span> در مسابقات سالانه</h6><small className="notification-text">15 اردیبهشت 12:32 ب.ظ</small>
                                                </div>
                                            </div>
                                        </a>
                                            <div className="d-flex justify-content-between read-notification cursor-pointer">
                                                <div className="media d-flex align-items-center">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar mr-1 m-0"><img src="../../assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height={39} width={39} /></div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">پیام جدید</span> دریافت شد</h6><small className="notification-text">شما 18 پیام خوانده نشده دارید</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between cursor-pointer">
                                                <div className="media d-flex align-items-center py-0">
                                                    <div className="media-left pr-0"><img className="mr-1" src="../../assets/images/icon/sketch-mac-icon.png" alt="avatar" height={39} width={39} /></div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">به روز رسانی آماده است</span></h6><small className="notification-text">Sketch 50.2 is currently newly added</small>
                                                    </div>
                                                    <div className="media-right pl-0">
                                                        <div className="row border-left text-center">
                                                            <div className="col-12 px-50 py-50 border-bottom">
                                                                <h6 className="media-heading text-bold-500 mb-0">به‌روزرسانی</h6>
                                                            </div>
                                                            <div className="col-12 px-50 py-50">
                                                                <h6 className="media-heading mb-0">بستن</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between cursor-pointer">
                                                <div className="media d-flex align-items-center">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar bg-primary bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content text-primary font-medium-2">ل‌د</span></div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">مشتری جدید</span> ثبت نام کرد</h6><small className="notification-text">1 ساعت پیش</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer">
                                                <div className="media d-flex align-items-center justify-content-between">
                                                    <div className="media-left pr-0">
                                                        <div className="media-body">
                                                            <h6 className="media-heading">پیشنهاد های جدید</h6>
                                                        </div>
                                                    </div>
                                                    <div className="media-right">
                                                        <div className="custom-control custom-switch">
                                                            <input className="custom-control-input" type="checkbox" defaultChecked id="notificationSwtich" />
                                                            <label className="custom-control-label" htmlFor="notificationSwtich" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between cursor-pointer">
                                                <div className="media d-flex align-items-center">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar bg-danger bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content"><i className="bx bxs-heart text-danger" /></span></div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">نرم افزار</span> تایید شد</h6><small className="notification-text">6 ساعت پیش</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between read-notification cursor-pointer">
                                                <div className="media d-flex align-items-center">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar mr-1 m-0"><img src="../../assets/images/portrait/small/avatar-s-4.jpg" alt="avatar" height={39} width={39} /></div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">فایل جدید</span> ارسال شد</h6><small className="notification-text">4 ساعت پیش</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between cursor-pointer">
                                                <div className="media d-flex align-items-center">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar bg-rgba-danger m-0 mr-1 p-25">
                                                            <div className="avatar-content"><i className="bx bx-detail text-danger" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">گزارش بودجه</span> ایجاد شد</h6><small className="notification-text">25 ساعت پیش</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between cursor-pointer">
                                                <div className="media d-flex align-items-center border-0">
                                                    <div className="media-left pr-0">
                                                        <div className="avatar mr-1 m-0"><img src="../../assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height={39} width={39} /></div>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="media-heading"><span className="text-bold-500">مشتری جدید</span> دیدگاهی ارسال کرد</h6><small className="notification-text">2 روز پیش</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown-menu-footer"><a className="dropdown-item p-50 text-primary justify-content-center" href="javascript:void(0)">خواندن همه اعلان ها</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                    <div className="user-nav d-sm-flex d-none"><span className="user-name">تونی استارک</span><span className="user-status">آماده</span></div><span><img className="round" src="../../assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} /></span>
                                </a>
                                    <div className="dropdown-menu"><a className="dropdown-item" href="#"><i className="bx bx-user mr-50" /> ویرایش پروفایل</a><a className="dropdown-item" href="#"><i className="bx bx-envelope mr-50" /> صندوق ورودی من</a><a className="dropdown-item" href="#"><i className="bx bx-check-square mr-50" /> وظیفه</a><a className="dropdown-item" href="#"><i className="bx bx-message mr-50" /> گفتگو ها</a>
                                        <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="bx bx-power-off mr-50" /> خروج</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Header;
