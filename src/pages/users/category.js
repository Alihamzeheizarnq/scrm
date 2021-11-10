import { useEffect } from 'react'
import { connect } from 'react-redux'

import CategoryCrate from '../../components/users/category'
import {
    CategorySelectRequest,
    ShowCategoryModal,
} from '../../state/category/action'

const App = (props) => {
    useEffect(() => {
        props.CategorySelectRequest()
    }, [])

    return (
        <>
            <div className="content-wrapper px-0 px-md-4">
                <div className="content-header row px-1">
                    <div className="content-header-left col-12 mb-2 mt-1">
                        <div className="row breadcrumbs-top">
                            <div className="col-sm-8">
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
                            <div
                                className="col-sm-4"
                                style={{ textAlign: 'left' }}
                            >
                                <button
                                    type="button"
                                    onClick={(e) => props.ShowModal(true)}
                                    className="btn btn-success glow flot-left"
                                >
                                    <i className="bx bx-plus" />
                                    <span className="align-middle ml-25">
                                        ایجاد دسته بندی
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section id="table-transactions" className="card">
                        <div className="card">
                            <div className="table-responsive">
                                <div
                                    id="table-extended-success_wrapper"
                                    className="dataTables_wrapper no-footer"
                                >
                                    <table
                                        id="table-extended-success"
                                        className="table mb-0 dataTable no-footer"
                                        role="grid"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{
                                                        width: '250.531px',
                                                    }}
                                                >
                                                    نام
                                                </th>
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                >
                                                    توضیحات
                                                </th>

                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="عمل"
                                                    style={{
                                                        width: '51.6406px',
                                                    }}
                                                >
                                                    عملیات
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.category.map((item) => (
                                                <tr
                                                    role="row"
                                                    className="even"
                                                    key={item.id}
                                                >
                                                    <td>{item.title}</td>
                                                    <td className="text-bold-700">
                                                        {item.body}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button
                                                                type="button"
                                                                class="btn btn-icon btn-light-secondary"
                                                                style={{
                                                                    marginLeft:
                                                                        '3px',
                                                                }}
                                                            >
                                                                <i className="bx bx-pencil"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                class="btn btn-icon btn-light-secondary"
                                                            >
                                                                <i className="bx bx-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <CategoryCrate />
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

const mapDispatchToProps = (dispatch) => {
    return {
        ShowModal: (bool) => dispatch(ShowCategoryModal(bool)),
        CategorySelectRequest: () => dispatch(CategorySelectRequest()),
    }
}

const getStateToProps = (state) => ({
    category: state.category.category,
    created: state.category.created,
})

export default connect(getStateToProps, mapDispatchToProps)(App)
