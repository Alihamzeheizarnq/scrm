import { useEffect } from "react";
import { connect } from "react-redux";

import CategoryCrate from "../../components/users/category";
import { CategorySelectRequest, ShowCategoryModal } from "../../state/category/action";

const App = (props) => {



    useEffect(() => {
        props.CategorySelectRequest();
    }, [])

    return (
        <>


            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-12 mb-2 mt-1">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h5 className="content-header-title float-left pr-1">2 ستون</h5>
                                <div className="breadcrumb-wrapper">
                                    <ol className="breadcrumb p-0 mb-0">
                                        <li className="breadcrumb-item"><a href="sk-layout-2-columns.html"><i className="bx bx-home-alt" /></a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">طرح های شروع</a>
                                        </li>
                                        <li className="breadcrumb-item active">2 ستون
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section id="description" className="card">

                        <div className="card">
                            {/* datatable start */}
                            <div className="table-responsive">
                                <div id="table-extended-success_wrapper" className="dataTables_wrapper no-footer"><table id="table-extended-success" className="table mb-0 dataTable no-footer" role="grid">
                                    <thead>
                                        <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="table-extended-success" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="کمپین: فعال سازی نمایش به صورت نزولی" style={{ width: '213.125px' }}>کمپین</th><th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="جزئیات حساب" style={{ width: '302.531px' }}>جزئیات حساب</th><th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="دسته" style={{ width: '140.453px' }}>دسته</th><th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="مقدار" style={{ width: '168.125px' }}>مقدار</th><th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="وضعیت" style={{ width: '101.125px' }}>وضعیت</th><th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="عمل" style={{ width: '51.6406px' }}>عمل</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/3.png" alt="card" />نوشیدنی پپسی
                                            </td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-truck mr-50" /><span>حمل و نقل</span>
                                            </td>
                                            <td className="text-bold-700">564,000 تومان</td>
                                            <td className="text-success">موفقیت!</td>
                                            <td>
                                                <div className="dropup">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                    </span>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/1.png" alt="card" />هدفون های بی سیم</td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-music mr-50" /><span>موزیک</span>
                                            </td>
                                            <td className="text-bold-700">1,934,000 تومان</td>
                                            <td className="text-success">موفقیت!</td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/4.png" alt="card" />هدفون های بی سیم</td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-music mr-50" /><span>موزیک</span>
                                            </td>
                                            <td className="text-bold-700">232,000 تومان</td>
                                            <td className="text-warning">در انتظار!</td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                    </span>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/5.png" alt="card" />هدفون های بی سیم</td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-truck mr-50" /><span>حمل و نقل</span>
                                            </td>
                                            <td className="text-bold-700">564,000 تومان</td>
                                            <td className="text-success">موفقیت!</td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                    </span>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/2.png" alt="card" />هدفون های بی سیم</td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-truck mr-50" /><span>حمل و نقل</span>
                                            </td>
                                            <td className="text-bold-700">894,000 تومان</td>
                                            <td className="text-warning">در انتظار!</td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                    </span>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="text-bold-600 pr-0 sorting_1"><img className="rounded-circle mr-1" src="../../assets/images/cards/2.png" alt="card" />کفش نایک</td>
                                            <td>شماره کارت 4154 81** **** 7617</td>
                                            <td className="text-bold-700"><i className="text-bold-600 align-middle bx bx-tennis-ball mr-50" /><span>ورزشی</span></td>
                                            <td className="text-bold-700">232,000 تومان</td>
                                            <td className="text-danger">ناموفق!</td>
                                            <td>
                                                <div className="dropup">
                                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                    </span>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> ویرایش</a>
                                                        <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> حذف</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr></tbody>
                                </table></div>
                            </div>
                            {/* datatable ends */}
                        </div>

                    </section>
                </div>
            </div>

            {/* <main id="main-container">
                <div className="bg-body-light">
                    <div className="content">
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                            <button type="button" class="btn btn-hero btn-success me-1 mb-3" onClick={e => props.ShowModal(true)}>
                                <i class="fa fa-fw fa-plus me-1"></i> ایجاد دسته بندی
                            </button>
                            <nav className="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-alt">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0)">صفحه اصلی</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0)">مدیریت کاربران</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">ایجاد کاربر</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        {
                            props.category.map(item => (
                                <div className="col-md-6 col-xl-3" key={item.id}>
                                    <div className="block block-rounded">
                                        <div className="block-content block-content-full ribbon ribbon-light">
                                            <div className="text-center py-1">
                                                <h4 className="mb-0">{item.title} </h4>
                                                <span>{item.body}</span>
                                            </div>
                                            <div className="text-center mt-1">
                                                <button type="button" className="btn btn-alt-success btn-sm  mx-1" data-toggle="click-ripple" style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                                                    <i class="fa fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-alt-danger btn-sm  " data-toggle="click-ripple" style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main> */}

            <CategoryCrate />
        </>
    )
}
export async function getServerSideProps({ req }) {
    if (!req.auth) {
        return req.redirectTo('/login');
    }
    return {
        props: {},
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ShowModal: (bool) => dispatch(ShowCategoryModal(bool)),
        CategorySelectRequest: () => dispatch(CategorySelectRequest()),
    }
}

const getStateToProps = (state) => ({
    category: state.category.category,
    created: state.category.created
})

export default connect(getStateToProps, mapDispatchToProps)(App);