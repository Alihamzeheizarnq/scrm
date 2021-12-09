import { connect } from 'react-redux'
import {
    CategoryDeleteRequest,
    ShowModalDeleteOpen,
} from '../../../state/category/action'

const CategoryCrate = ({
    delete_modal_category,
    DeleteModal,
    deleteList,
    CategoryDeleteRequest,
}) => {
    return (
        <>
            <div
                className={`customizer  d-md-block ${
                    delete_modal_category && deleteList.length ? 'open' : ''
                }`}
            >
                <a
                    className="customizer-close"
                    href={true}
                    onClick={(e) => {
                        DeleteModal(false)
                    }}
                >
                    <i className="bx bx-x" />
                </a>

                <div className="customizer-content p-2 ps ps--active-y">
                    <h4 className="text-uppercase mb-0 mt-n50">حذف اطلاعات</h4>
                    <hr />

                    <p>
                        آیا از حذف اطلاعات مطمعن هستید ؟
                        <button
                            type="button"
                            className="btn btn-danger mx-1"
                            onClick={(e) => CategoryDeleteRequest(deleteList)}
                        >
                            بله
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        DeleteModal: (bool) => dispatch(ShowModalDeleteOpen(bool)),
        CategoryDeleteRequest: (data) => dispatch(CategoryDeleteRequest(data)),
    }
}

const getStateToProps = (state) => ({
    delete_modal_category: state.category.deleteModel,
    deleteList: state.category.delete,
})

export default connect(getStateToProps, mapDispatchToProps)(CategoryCrate)
