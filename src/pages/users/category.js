import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { FileUpload } from 'primereact/fileupload'
import { Rating } from 'primereact/rating'
import { Toolbar } from 'primereact/toolbar'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton } from 'primereact/radiobutton'
import { InputNumber } from 'primereact/inputnumber'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import CategoryCrate from '../../components/container/users/category'
import {
    CategorySelectRequest,
    ShowCategoryModal,
} from '../../state/category/action'

const DataTableCrudDemo = (props) => {
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK',
    }

    const [selectedProducts, setSelectedProducts] = useState(null)
    const [globalFilter, setGlobalFilter] = useState(null)
    const toast = useRef(null)
    const dt = useRef(null)

    useEffect(() => {
        props.CategorySelectRequest()
    }, [])

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true)
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="ایجاد دسته بندی "
                    icon="pi pi-plus"
                    className="p-button-success p-mr-2"
                    onClick={(e) => props.ShowModal(true)}
                />
                <Button
                    label="حذف"
                    icon="pi pi-trash"
                    className="p-button-danger"
                    onClick={confirmDeleteSelected}
                    disabled={!selectedProducts || !selectedProducts.length}
                />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="table-header">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            type="search"
                            onInput={(e) => setGlobalFilter(e.target.value)}
                            placeholder="جستجو"
                        />
                    </span>
                </div>
            </React.Fragment>
        )
    }

    return (
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
                        <div className="col-sm-4" style={{ textAlign: 'left' }}>
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
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar
                        className="p-mb-4"
                        right={leftToolbarTemplate}
                        left={rightToolbarTemplate}
                    ></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.category}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        responsiveLayout="scroll"
                    >
                        <Column
                            selectionMode="multiple"
                            headerStyle={{ width: '3rem' }}
                            exportable={false}
                        ></Column>

                        <Column
                            field="title"
                            header="عنوان"
                            sortable
                            headerStyle={{ textAlign: 'right' }}
                        ></Column>
                        <Column
                            field="body"
                            header="توضیحات"
                            sortable
                            headerStyle={{ textAlign: 'right' }}
                        ></Column>
                    </DataTable>
                </div>
            </div>
            <CategoryCrate />
        </div>
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

export default connect(getStateToProps, mapDispatchToProps)(DataTableCrudDemo)
