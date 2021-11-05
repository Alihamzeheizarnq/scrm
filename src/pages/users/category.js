import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryCrate from "../../components/users/category";
import { CategorySelectRequest, ShowCategoryModal } from "../../state/category/action";

const App = (props) => {



    useEffect(() => {
        props.CategorySelectRequest();
    }, [])

    return (
        <>
            <main id="main-container">
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
                                                <button type="button" className="btn btn-alt-success btn-sm  ml-1" data-toggle="click-ripple" style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
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
            </main>

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
    category: state.category.category.filter(item => item.type == 'user'),
    created: state.category.created
})

export default connect(getStateToProps, mapDispatchToProps)(App);