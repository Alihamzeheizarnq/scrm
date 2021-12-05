import React, { useEffect } from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import { connect } from 'react-redux'
import { CategorySelectRequest, ShowCategoryModal } from '../../state/category/action'

function WithMultipleCheckboxes(props) {


    useEffect(() => {
        props.CategorySelectRequest()
    }, [])


    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'عنوان',
                field: 'title',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                
                label: 'توضیحات',
                field: 'body',
                sort: 'disabled',
                width: 150,
            },
          
        ],
        rows:  props.category,
    })
    const [checkbox1, setCheckbox1] = React.useState([])

    const showLogs2 = (e) => {
        console.log(e);
        setCheckbox1(e)
    }

    return (
        <>
            <div className="content-wrapper px-1">
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
                    <section id="description" className="card p-1">
                        <MDBDataTableV5
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={datatable}
                            checkbox
                            headCheckboxID="id6"
                            bodyCheckboxID="checkboxes6"
                            getValueCheckBox={(e) => {
                                showLogs2(e)
                            }}
                            getValueAllCheckBoxes={(e) => {
                                showLogs2(e)
                            }}
                            multipleCheckboxes
                        />
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
export default connect(getStateToProps, mapDispatchToProps)(WithMultipleCheckboxes)
