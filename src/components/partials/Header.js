const Header = () => {
    return (
        <>
            <header id="page-header">
                <div className="content-header">
                    <div className="content-header-section">
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-navicon" />
                        </button>
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                            <i className="fa fa-search" />
                        </button>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-themes-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-paint-brush" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-themes-dropdown">
                                <h6 className="dropdown-header text-center">Color Themes</h6>
                                <div className="row no-gutters text-center mb-5">
                                    <div className="col-4 mb-5">
                                        <a className="text-default" data-toggle="theme" data-theme="default" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-elegance" data-toggle="theme" data-theme="/css/themes/elegance.min.css" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-pulse" data-toggle="theme" data-theme="/css/themes/pulse.min.css" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-flat" data-toggle="theme" data-theme="/css/themes/flat.min.css" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-corporate" data-toggle="theme" data-theme="/css/themes/corporate.min.css" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-earth" data-toggle="theme" data-theme="/css/themes/earth.min.css" href="#">
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_toggle">
                                    Sidebar Style
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-header-section">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-angle-down mr-5" />
                            </button>
                            <div className="dropdown-menu text-right min-width-150" aria-labelledby="page-header-user-dropdown">
                                <a className="dropdown-item" >
                                    Profile <i className="si si-user ml-5" />
                                </a>
                                <a className="
                                    dropdown-item
                                    d-flex
                                    align-items-center
                                    justify-content-between
                                ">
                                    <span>Inbox <i className="si si-envelope-open ml-5" /></span>
                                    <span className="badge badge-primary">3</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    Invoices <i className="si si-note ml-5" />
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#" data-toggle="layout" data-action="side_overlay_toggle">
                                    Settings <i className="si si-wrench ml-5" />
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" >
                                    Sign Out <i className="si si-logout ml-5" />
                                </a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="fa fa-tasks" />
                        </button>
                    </div>
                </div>
                <div id="page-header-search" className="overlay-header">
                    <div className="content-header content-header-fullrow">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-square btn-secondary px-15" data-toggle="layout" data-action="header_search_off">
                                        <i className="fa fa-times" />
                                    </button>
                                </div>
                                <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-square btn-secondary px-15">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="page-header-loader" className="overlay-header bg-primary">
                    <div className="content-header content-header-fullrow text-center">
                        <div className="content-header-item">
                            <i className="fa fa-sun-o fa-spin text-white" />
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}



export default Header;