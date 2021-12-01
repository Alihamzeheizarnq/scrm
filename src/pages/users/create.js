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
    useEffect(() => {
        props.CategorySelectRequest()
    }, [])

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

    const [products, setProducts] = useState(null)
    const [productDialog, setProductDialog] = useState(false)
    const [deleteProductDialog, setDeleteProductDialog] = useState(false)
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
    const [product, setProduct] = useState(emptyProduct)
    const [selectedProducts, setSelectedProducts] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [globalFilter, setGlobalFilter] = useState(null)
    const toast = useRef(null)
    const dt = useRef(null)

    // useEffect(() => {
    //     productService.getProducts().then((data) => setProducts(data))
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    const openNew = () => {
        setProduct(emptyProduct)
        setSubmitted(false)
        setProductDialog(true)
    }

    const hideDialog = () => {
        setSubmitted(false)
        setProductDialog(false)
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false)
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false)
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true)
    }

    const onCategoryChange = (e) => {
        let _product = { ...product }
        _product['category'] = e.value
        setProduct(_product)
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || ''
        let _product = { ...product }
        _product[`${name}`] = val

        setProduct(_product)
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0
        let _product = { ...product }
        _product[`${name}`] = val

        setProduct(_product)
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="New"
                    icon="pi pi-plus"
                    className="p-button-success p-mr-2"
                    onClick={openNew}
                />
                <Button
                    label="Delete"
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
                <FileUpload
                    mode="basic"
                    name="demo[]"
                    auto
                    url="https://primefaces.org/primereact/showcase/upload.php"
                    accept=".csv"
                    chooseLabel="Import"
                    className="p-mr-2 p-d-inline-block"
                />
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return (
            <img
                src={`showcase/demo/images/product/${rowData.image}`}
                onError={(e) =>
                    (e.target.src =
                        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                }
                alt={rowData.image}
                className="product-image"
            />
        )
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price)
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <span
                className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
            >
                {rowData.inventoryStatus}
            </span>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success p-mr-2"
                    onClick={() => editProduct(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-warning"
                    onClick={() => confirmDeleteProduct(rowData)}
                />
            </React.Fragment>
        )
    }

    const header = (
        <div className="table-header">
            <h5 className="p-mx-0 p-my-1">Manage Products</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </span>
        </div>
    )
    const productDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDialog}
            />
            <Button label="Save" icon="pi pi-check" className="p-button-text" />
        </React.Fragment>
    )
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProductDialog}
            />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" />
        </React.Fragment>
    )
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProductsDialog}
            />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" />
        </React.Fragment>
    )

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
                        left={leftToolbarTemplate}
                        right={rightToolbarTemplate}
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
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column
                            selectionMode="multiple"
                            headerStyle={{ width: '3rem' }}
                            exportable={false}
                        ></Column>
                        <Column
                            field="code"
                            header="Code"
                            sortable
                            style={{ minWidth: '12rem' }}
                        ></Column>
                        <Column
                            field="name"
                            header="Name"
                            sortable
                            style={{ minWidth: '16rem' }}
                        ></Column>
                        <Column
                            field="image"
                            header="Image"
                            body={imageBodyTemplate}
                        ></Column>
                        <Column
                            field="price"
                            header="Price"
                            body={priceBodyTemplate}
                            sortable
                            style={{ minWidth: '8rem' }}
                        ></Column>
                        <Column
                            field="category"
                            header="Category"
                            sortable
                            style={{ minWidth: '10rem' }}
                        ></Column>
                        <Column
                            field="rating"
                            header="Reviews"
                            body={ratingBodyTemplate}
                            sortable
                            style={{ minWidth: '12rem' }}
                        ></Column>
                        <Column
                            field="inventoryStatus"
                            header="Status"
                            body={statusBodyTemplate}
                            sortable
                            style={{ minWidth: '12rem' }}
                        ></Column>
                        <Column
                            body={actionBodyTemplate}
                            exportable={false}
                            style={{ minWidth: '8rem' }}
                        ></Column>
                    </DataTable>
                </div>

                <Dialog
                    visible={productDialog}
                    style={{ width: '450px' }}
                    header="Product Details"
                    modal
                    className="p-fluid"
                    footer={productDialogFooter}
                    onHide={hideDialog}
                >
                    {product.image && (
                        <img
                            src={`showcase/demo/images/product/${product.image}`}
                            onError={(e) =>
                                (e.target.src =
                                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                            }
                            alt={product.image}
                            className="product-image p-d-block p-m-auto p-pb-3"
                        />
                    )}
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText
                            id="name"
                            value={product.name}
                            onChange={(e) => onInputChange(e, 'name')}
                            required
                            autoFocus
                            className={classNames({
                                'p-invalid': submitted && !product.name,
                            })}
                        />
                        {submitted && !product.name && (
                            <small className="p-error">Name is required.</small>
                        )}
                    </div>
                    <div className="p-field">
                        <label htmlFor="description">Description</label>
                        <InputTextarea
                            id="description"
                            value={product.description}
                            onChange={(e) => onInputChange(e, 'description')}
                            required
                            rows={3}
                            cols={20}
                        />
                    </div>

                    <div className="p-field">
                        <label className="p-mb-3">Category</label>
                        <div className="p-formgrid p-grid">
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton
                                    inputId="category1"
                                    name="category"
                                    value="Accessories"
                                    onChange={onCategoryChange}
                                    checked={product.category === 'Accessories'}
                                />
                                <label htmlFor="category1">Accessories</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton
                                    inputId="category2"
                                    name="category"
                                    value="Clothing"
                                    onChange={onCategoryChange}
                                    checked={product.category === 'Clothing'}
                                />
                                <label htmlFor="category2">Clothing</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton
                                    inputId="category3"
                                    name="category"
                                    value="Electronics"
                                    onChange={onCategoryChange}
                                    checked={product.category === 'Electronics'}
                                />
                                <label htmlFor="category3">Electronics</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton
                                    inputId="category4"
                                    name="category"
                                    value="Fitness"
                                    onChange={onCategoryChange}
                                    checked={product.category === 'Fitness'}
                                />
                                <label htmlFor="category4">Fitness</label>
                            </div>
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="price">Price</label>
                            <InputNumber
                                id="price"
                                value={product.price}
                                onValueChange={(e) =>
                                    onInputNumberChange(e, 'price')
                                }
                                mode="currency"
                                currency="USD"
                                locale="en-US"
                            />
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="quantity">Quantity</label>
                            <InputNumber
                                id="quantity"
                                value={product.quantity}
                                onValueChange={(e) =>
                                    onInputNumberChange(e, 'quantity')
                                }
                                integeronly
                            />
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    visible={deleteProductDialog}
                    style={{ width: '450px' }}
                    header="Confirm"
                    modal
                    footer={deleteProductDialogFooter}
                    onHide={hideDeleteProductDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle p-mr-3"
                            style={{ fontSize: '2rem' }}
                        />
                        {product && (
                            <span>
                                Are you sure you want to delete{' '}
                                <b>{product.name}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>

                <Dialog
                    visible={deleteProductsDialog}
                    style={{ width: '450px' }}
                    header="Confirm"
                    modal
                    footer={deleteProductsDialogFooter}
                    onHide={hideDeleteProductsDialog}
                >
                    <div className="confirmation-content">
                        <i
                            className="pi pi-exclamation-triangle p-mr-3"
                            style={{ fontSize: '2rem' }}
                        />
                        {product && (
                            <span>
                                Are you sure you want to delete the selected
                                products?
                            </span>
                        )}
                    </div>
                </Dialog>
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
