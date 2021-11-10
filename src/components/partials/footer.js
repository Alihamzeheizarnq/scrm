const Footer = () => {
    return (
        <>
            <footer className="footer footer-static footer-light">
                <p className="clearfix mb-0">
                    <span className="float-left d-inline-block">
                        ارائه شده در وب‌سایت
                        <a href="https://www.rtl-theme.com" target="_blank">
                            راست‌چین
                        </a>
                    </span>
                    <span className="float-right d-sm-inline-block d-none">
                        ساخته شده با
                        <i className="bx bxs-heart pink ml-50 font-small-3" />
                    </span>
                    <button
                        className="btn btn-primary btn-icon scroll-top"
                        type="button"
                    >
                        <i className="bx bx-up-arrow-alt" />
                    </button>
                </p>
            </footer>
        </>
    )
}
export default Footer
