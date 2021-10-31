import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryCrate from "../../components/users/category";
import { CategorySelectRequest } from "../../state/category/select/action";

const App = (props) => {



    useEffect(() => {
        props.CategorySelectRequest();
    }, [])
    const [craeteModal, setCreateModal] = useState(false);

    const hide = (bool) => {
        setCreateModal(bool);
    }




    return (
        <>
            <main id="main-container">

                <div className="content">
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">دسته بندی کاربران</h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                    <button type="button" className="btn btn-success " onClick={e => setCreateModal(true)}>ایجاد دسته بندی</button>
                                </div>
                            </div>
                        </div>
                        <div className="block-content">
                            <table className="table table-sm table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ width: 50 }}>#</th>
                                        <th>عنوان</th>
                                        <th className="text-center" style={{ width: 100 }}>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        props.category.map(item => (
                                            <tr key={item.id}>
                                                <th className="text-center" scope="row">1</th>
                                                <td>{item.title}</td>

                                                <td className="text-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-secondary js-tooltip-enabled" data-toggle="tooltip" data-original-title="Edit">
                                                            <i className="fa fa-pencil" />
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-secondary js-tooltip-enabled" data-toggle="tooltip" data-original-title="Delete">
                                                            <i className="fa fa-times" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </main>

            <CategoryCrate show={craeteModal} hide={hide} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        CategorySelectRequest: () => dispatch(CategorySelectRequest()),
    }
}

const getStateToProps = (state) => ({
    category: state.category.category.filter(item => item.type == 'user'),
    created: state.category.created
})

export default connect(getStateToProps, mapDispatchToProps)(App);