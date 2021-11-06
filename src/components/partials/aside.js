const Aside = () => {
    return (
        <>
            <aside id="side-overlay">
                <div id="side-overlay-scroll">
                    <div className="content-header content-header-fullrow">
                        <div className="content-header-section align-parent">
                            <button type="button" className="btn btn-circle btn-dual-secondary align-v-l"
                            >
                                <i className="test" />
                            </button>
                            <div className="content-header-item">
                                <a className="img-link ml-5" href="#">
                                    <img className="img-avatar img-avatar32" alt="true" />
                                </a>
                                <a className="align-middle link-effect text-primary-dark font-w600"
                                    href="#">Admin</a>
                            </div>
                        </div>
                    </div>
                    <div className="content-side">
                        <div className="block pull-t pull-r-l">
                            <div
                                className=" block-content block-content-full block-content-sm bg-body-light
                                        ">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="side-overlay-search"
                                            name="side-overlay-search" placeholder="Search.." />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-square btn-secondary px-10">
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="block pull-r-l">
                            <div 
                            className="block-content block-content-full block-content-sm bg-body-light">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">
                                            Stat
                                        </div>
                                        <div className="font-size-h4">100</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">
                                            Stat
                                        </div>
                                        <div className="font-size-h4">200</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">
                                            Stat
                                        </div>
                                        <div className="font-size-h4">300</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block pull-r-l">
                            <div className="block-header bg-body-light">
                                <h3 className="block-title">Title</h3>
                                <div className="block-options pl-0">
                                    <button type="button" className="btn-block-option"
                                    >
                                        <i className="si si-refresh" />
                                    </button>
                                    <button type="button" className="btn-block-option"
                                    />
                                </div>
                            </div>
                            <div className="block-content">
                                <p>Content...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}


export default Aside;