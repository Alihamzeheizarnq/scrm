import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import { connect } from 'react-redux'
import {
    CategorySelectRequest,
    ShowCategoryModal,
} from '../../state/category/action'
import CategoryCrate from '../../components/container/users/category'

function WithMultipleCheckboxes(props) {
    let ss = () => {
        return (
            <button color="danger" onClick={handleDelete}>
                {' '}
                Delete{' '}
            </button>
        )
    }

    let handleDelete = (cellContent, row) => {
        console.log(cellContent, row)
    }

    const products = props.category
    const columns = [
        {
            dataField: 'id',
            text: 'آیدی',
            sort: true,
            onSort: (field, order) => {
                console.log(field, order)
            },
        },
        {
            dataField: 'title',
            text: 'عنوان',
            sort: true,
        },
        {
            dataField: 'body',
            text: 'توضیحات',
            sort: true,
        },

        {
            dataField: 'remove',
            text: 'Delete',
            formatter: (cellContent, row) => {
                return (
                    <>
                        <button
                            className="btn btn-danger btn-xs"
                            onClick={() => handleDelete(cellContent, row)}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-success btn-xs"
                            onClick={() => handleDelete(cellContent, row)}
                        >
                            edit
                        </button>
                    </>
                )
            },
        },
    ]

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(e, row, rowIndex)
        },
    }
    const selectRow = {
        mode: 'checkbox',
        nonSelectableClasses: 'my-class',
        onSelectAll: (isSelect, rows, e) => {
            console.log(rows)
        },
        onSelect: (row, isSelect, rowIndex, e) => {
            console.log(row, isSelect)
        },
    }

    useEffect(() => {
        props.CategorySelectRequest()
    }, [])

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
                        <BootstrapTable
                            keyField="id"
                            data={products}
                            columns={columns}
                            rowEvents={rowEvents}
                            selectRow={selectRow}
                            loading={true}
                            bordered={false}
                            hover={true}
                            pagination={paginationFactory()}
                        />
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
export default connect(
    getStateToProps,
    mapDispatchToProps,
)(WithMultipleCheckboxes)
