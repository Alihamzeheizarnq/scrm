const Header = () => {
    return (
        <>
            <header id="page-header">
                {/* Header Content */}
                <div className="content-header">
                    {/* Right Section */}
                    <div>
                        {/* Toggle Sidebar */}
                        {/* Layout API, functionality initialized in Template._uiApiLayout()*/}
                        <button type="button" className="btn btn-dual mr-1" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars" />
                        </button>
                        {/* END Toggle Sidebar */}
                        {/* Open Search Section */}
                        {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                        <button type="button" className="btn btn-dual" data-toggle="layout" data-action="header_search_on">
                            <i className="fa fa-fw fa-search" /> <span className="ml-1 d-none d-sm-inline-block">Search</span>
                        </button>
                        {/* END Open Search Section */}
                    </div>
                    {/* END Right Section */}
                    {/* Left Section */}
                    <div>
                        {/* User Dropdown */}
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn btn-dual" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-fw fa-user d-sm-none" />
                                <span className="d-none d-sm-inline-block">Admin</span>
                                <i className="fa fa-fw fa-angle-down mr-1 d-none d-sm-inline-block" />
                            </button>
                            <div className="dropdown-menu p-0" aria-labelledby="page-header-user-dropdown">
                                <div className="bg-primary rounded-top font-w600 text-white text-center p-3">
                                    User Options
                                </div>
                                <div className="p-2 text-right">
                                    <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="far fa-fw fa-user ml-1" /> Profile
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="far fa-fw fa-envelope mr-1" /> Inbox</span>
                                        <span className="badge badge-primary badge-pill">3</span>
                                    </a>
                                    <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="far fa-fw fa-file-alt ml-1" /> Invoices
                                    </a>
                                    <div role="separator" className="dropdown-divider" />
                                    {/* Toggle Side Overlay */}
                                    {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                                    <a className="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                        <i className="far fa-fw fa-building ml-1" /> Settings
                                    </a>
                                    {/* END Side Overlay */}
                                    <div role="separator" className="dropdown-divider" />
                                    <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="far fa-fw fa-arrow-alt-circle-left ml-1" /> Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* END User Dropdown */}
                        {/* Notifications Dropdown */}
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn btn-dual" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-fw fa-bell" />
                                <span className="badge badge-secondary badge-pill">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg p-0" aria-labelledby="page-header-notifications-dropdown">
                                <div className="bg-primary rounded-top font-w600 text-white text-center p-3">
                                    Notifications
                                </div>
                                <ul className="nav-items my-2 pr-0 text-right">
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-check-circle text-success" />
                                            </div>
                                            <div className="media-body font-size-sm pl-2">
                                                <div className="font-w600">App was updated to v5.6!</div>
                                                <div className="text-muted font-italic">3 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-user-plus text-info" />
                                            </div>
                                            <div className="media-body font-size-sm pl-2">
                                                <div className="font-w600">New Subscriber was added! You now have 2580!</div>
                                                <div className="text-muted font-italic">10 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-times-circle text-danger" />
                                            </div>
                                            <div className="media-body font-size-sm pl-2">
                                                <div className="font-w600">Server backup failed to complete!</div>
                                                <div className="text-muted font-italic">30 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-exclamation-circle text-warning" />
                                            </div>
                                            <div className="media-body font-size-sm pl-2">
                                                <div className="font-w600">You are running out of space. Please consider upgrading your plan.</div>
                                                <div className="text-muted font-italic">1 hour ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-plus-circle text-primary" />
                                            </div>
                                            <div className="media-body font-size-sm pl-2">
                                                <div className="font-w600">New Sale! + $30</div>
                                                <div className="text-muted font-italic">2 hours ago</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="p-2 border-top">
                                    <a className="btn btn-light btn-block text-center" href="javascript:void(0)">
                                        <i className="fa fa-fw fa-eye mr-1" /> View All
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* END Notifications Dropdown */}
                        {/* Toggle Side Overlay */}
                        {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                        <button type="button" className="btn btn-dual" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="far fa-fw fa-list-alt" />
                        </button>
                        {/* END Toggle Side Overlay */}
                    </div>
                    {/* END Left Section */}
                </div>
                {/* END Header Content */}
                {/* Header Search */}
                <div id="page-header-search" className="overlay-header bg-primary">
                    <div className="content-header">
                        <form className="w-100" method="POST">
                            <div className="input-group">
                                <div className="input-group-apend">
                                    {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                                    <button type="button" className="btn btn-primary rounded-right" data-toggle="layout" data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle" />
                                    </button>
                                </div>
                                <input type="text" className="form-control border-0 rounded-left" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                            </div>
                        </form>
                    </div>
                </div>
                {/* END Header Search */}
                {/* Header Loader */}
                {/* Please check out the Loaders page under Components category to see examples of showing/hiding it */}
                <div id="page-header-loader" className="overlay-header bg-primary-darker">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-2x fa-sun fa-spin text-white" />
                        </div>
                    </div>
                </div>
                {/* END Header Loader */}
            </header>


        </>
    )
}



export default Header;
