const Header = () => {
    return (
        <>
            <header id="page-header">
                <div className="content-header">
                    <div className="content-header-section">
                        <button type="button" className="btn btn-circle btn-dual-secondary"  >
                            <i className="fa fa-navicon" />
                        </button>
                        <button type="button" className="btn btn-circle btn-dual-secondary"  >
                            <i className="fa fa-search" />
                        </button>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-themes-dropdown"  >
                                <i className="fa fa-paint-brush" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-themes-dropdown">
                                <h6 className="dropdown-header text-center">Color Themes</h6>
                                <div className="row no-gutters text-center mb-5">
                                    <div className="col-4 mb-5">
                                        <a className="text-default"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-elegance"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-pulse"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-flat"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-corporate"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                    <div className="col-4 mb-5">
                                        <a className="text-earth"  >
                                            <i className="fa fa-2x fa-circle" />
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10"  >
                                    Sidebar Style
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-header-section">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown"  >
                                <i className="fa fa-angle-down mr-5" />
                                alihamzehei
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
                                <a className="dropdown-item" href="#"  >
                                    Settings <i className="si si-wrench ml-5" />
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" >
                                    Sign Out <i className="si si-logout ml-5" />
                                </a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-circle btn-dual-secondary"  >
                            <i className="fa fa-tasks" />
                        </button>
                    </div>
                </div>
                <div id="page-header-search" className="overlay-header">
                    <div className="content-header content-header-fullrow">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-square btn-secondary px-15"  >
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