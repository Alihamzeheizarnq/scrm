import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
    CategoryEditData,
    CategoryListDeleteAdd,
    CategorySelectRequest,
    ShowCategoryModal,
    ShowModalDeleteOpen,
    ShowModalEditOpen,
} from '../../state/category/action'
import CategoryCrate from '../../components/container/users/category'
import CategoryDelete from '../../components/container/users/delete-category'
import CategoryEdit from '../../components/container/users/edit-category'
import DataTable from '../../components/DataTabl'

function WithMultipleCheckboxes(props) {
    let handleDelete = (cellContent, row) => {
        props.editModal(true)
        props.editData(row)
    }
    useEffect(() => {
        props.CategorySelectRequest()
    }, [])

    const data = props.category
    const columns = [
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
            text: 'عملیات',
            formatter: (cellContent, row) => {
                return (
                    <>
                        <a
                            href={true}
                            className="tag-a-user"
                            onClick={() => handleDelete(cellContent, row)}
                        >
                            <i class="badge-circle badge-circle-light-secondary bx bx-pencil font-medium-1"></i>
                        </a>
                    </>
                )
            },
        },
    ]

    const SelectAll = (args) => {
        if (args.isSelect) {
            args.rows.map((item) => props.CategoryDeleteAddList(item.id, true))
        } else {
            args.rows.map((item) => props.CategoryDeleteAddList(item.id, false))
        }
    }
    const Select = (args) => {
        if (args.isSelect) {
            props.CategoryDeleteAddList(args.row.id, true)
        } else {
            props.CategoryDeleteAddList(args.row.id, false)
        }
    }
    const pageChage = (args) => {
        console.log(args)
    }
    const pageSizeChage = (args) => {
        console.log(args)
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
                                {props.delete.length ? (
                                    <button
                                        type="button"
                                        onClick={(e) => props.DeleteModal(true)}
                                        className="btn btn-danger glow flot-left mx-1"
                                    >
                                        <i className="bx bxs-trash-alt" />
                                        <span className="align-middle ml-25">
                                            حذف
                                        </span>
                                    </button>
                                ) : null}
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
                        <DataTable
                            columns={columns}
                            data={data}
                            SelectAll={SelectAll}
                            Select={Select}
                            pageSizeChage={pageSizeChage}
                            pageChage={pageChage}
                        />
                    </section>
                </div>
            </div>
            <CategoryCrate />
            <CategoryDelete />
            <CategoryEdit />
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
        editData: (data) => dispatch(CategoryEditData(data)),
        editModal: (bool) => dispatch(ShowModalEditOpen(bool)),
        DeleteModal: (bool) => dispatch(ShowModalDeleteOpen(bool)),
        CategorySelectRequest: () => dispatch(CategorySelectRequest()),
        CategoryDeleteAddList: (id, bool) =>
            dispatch(CategoryListDeleteAdd(id, bool)),
    }
}

const getStateToProps = (state) => ({
    category: state.category.category,
    delete: state.category.delete,
})
export default connect(
    getStateToProps,
    mapDispatchToProps,
)(WithMultipleCheckboxes)
