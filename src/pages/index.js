import { connect } from 'react-redux'

const App = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-12 mb-2 mt-1">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h5 className="content-header-title float-left pr-1">
                                    2 ستون
                                </h5>
                                <div className="breadcrumb-wrapper">
                                    <ol className="breadcrumb p-0 mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="sk-layout-2-columns.html">
                                                <i className="bx bx-home-alt" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">طرح های شروع</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            2 ستون
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section id="description" className="card">
                        <div className="card-header">
                            <h4 className="card-title">توضیحات</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>
                                        طرح 2 ستون متداول ترین و محبوب ترین طرح
                                        می باشد. این طرح دارای فهرست ناوبری می
                                        باشد و از بخش های نوار ناوبری و فوتر
                                        متداول استفاده می کند. با این حال
                                        میتوانید هدر و فوتر سفارشی به صفحه اضافه
                                        نمایید.
                                    </p>
                                    <div
                                        className="alert bg-rgba-warning mb-2"
                                        role="alert"
                                    >
                                        طرح پیش فرض قالب مدیریت فرست 2 ستون می
                                        باشد. اگر طرح صفحه را تنظیم نکنید به
                                        صورت پیش فرض 2 ستون خواهد شد.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps({ req }) {
    if (!req.auth) {
        return req.redirectTo('/login')
    }

    return {
        props: {},
    }
}

const getStateToProps = (state) => ({
    users: state.users,
})

export default connect(getStateToProps)(App)
