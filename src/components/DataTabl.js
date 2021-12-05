import { useRouter } from 'next/router'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
const DataTable = ({
    data,
    columns,
    SelectAll,
    pageChage,
    pageSizeChage,
    Select,
}) => {
    const router = useRouter()
    const onPageChange = (page, sizePerPage) => {
        router.push({ search: `page=${page}` })
        pageChage({ page, sizePerPage })
    }
    const onSizePerPageChange = (page, sizePerPage) => {
        router.push({ search: `page=${page}` })
        pageSizeChage({ page, sizePerPage })
    }

    const sizePerPageRenderer = ({
        options,
        currSizePerPage,
        onSizePerPageChange,
    }) => (
        <div className="btn-group" role="group">
            {options.map((option) => (
                <button
                    key={option.text}
                    type="button"
                    onClick={() => onSizePerPageChange(option.page)}
                    className={`btn ${
                        currSizePerPage === `${option.page}`
                            ? 'btn-secondary'
                            : 'btn-warning'
                    }`}
                >
                    {option.text}
                </button>
            ))}
        </div>
    )
    const rowEvents = {
        onClick: (e, row, rowIndex) => {},
    }
    const selectRow = {
        mode: 'checkbox',
        onSelectAll: (isSelect, rows, e) => SelectAll({ isSelect, rows, e }),
        onSelect: (row, isSelect, rowIndex, e) =>
            Select({ row, isSelect, rowIndex, e }),
    }
    return (
        <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            rowEvents={rowEvents}
            selectRow={selectRow}
            loading={true}
            bordered={false}
            hover={true}
            pagination={paginationFactory({
                onPageChange,
                page: router.query.page ? parseInt(router.query.page) : 1,
                withFirstAndLast: true,
                alwaysShowAllBtns: true,
                prePageText: 'قبلی',
                nextPageText: 'بعدی',
                firstPageText: 'اولین',
                lastPageText: 'اخرین',
                disablePageTitle: true,
                sizePerPageRenderer,
                sizePerPage: 10,
                sizePerPageList: [5, 10, 20, 50],
                hideSizePerPage: true,
                onSizePerPageChange,
            })}
        />
    )
}

export default DataTable
