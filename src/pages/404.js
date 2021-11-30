import Link from 'next/link'

import imgNotFound from './../dist/image/404.png'
const MyCustom404Page = (props) => {
    return (
        <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
                {/* error 404 */}
                <section className="row flexbox-container">
                    <div className="col-xl-12 col-md-7 col-9">
                        <div className="card bg-transparent shadow-none">
                            <div className="card-body text-center bg-transparent">
                                <p className="pb-3">صفحه مورد نظر پیدا نشد !</p>
                                <img
                                    className="img-fluid"
                                    src={imgNotFound.src}
                                    alt="404 error"
                                    style={{ height: '270px' }}
                                />
                                <div>
                                    <Link href="/">
                                        <a
                                            href="index.html"
                                            className="btn btn-primary round glow mt-3"
                                        >
                                            بازگشت به صفحه اصلی
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyCustom404Page
