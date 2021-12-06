import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CategoryEditRequest, ShowModalEditOpen } from '../../../state/category/action'

let schema = yup.object().shape({
    title: yup.string().required('پر کردن این فیلد الزامی میباشد'),
    body: yup.string().required('پر کردن این فیلد الزامی میباشد'),
})

const CategoryCrate = ({ show_modal_edit_category, editModal, editData , categoryEditRequest }) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        if (editData) {
            setValue('title', editData.title)
            setValue('body', editData.body)
        }
    }, [editData])
    const onSubmit = (data) => {
        data.id = editData.id;
        categoryEditRequest(data);
    }

    return (
        <>
            <div
                className={`customizer  d-md-block ${
                    show_modal_edit_category ? 'open' : ''
                }`}
            >
                <a
                    className="customizer-close"
                    href={true}
                    onClick={(e) => {
                        editModal(false)
                    }}
                >
                    <i className="bx bx-x" />
                </a>
                
                <div className="customizer-content p-2 ps ps--active-y">
                    <h4 className="text-uppercase mb-0 mt-n50">
                        ویرایش دسته بندی
                    </h4>
                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="example-nf-email">عنوان </label>
                            <input
                                type="text"
                                {...register('title')}
                                className={`form-control ${
                                    errors?.title?.message ? 'is-invalid' : ''
                                }`}
                                id="example-nf-email"
                                name="example-nf-email"
                                placeholder="عنوان"
                                onChange={(e) =>
                                    setValue('title', e.target.value, {
                                        shouldValidate: true,
                                    })
                                }
                            />
                            <div className="invalid-feedback">
                                {errors?.title?.message}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                className="col-12"
                                htmlFor="example-textarea-input"
                            >
                                توضیحات
                            </label>
                            <div className="col-12">
                                <textarea
                                    className={`form-control ${
                                        errors?.body?.message
                                            ? 'is-invalid'
                                            : ''
                                    }`}
                                    {...register('body')}
                                    id="example-textarea-input"
                                    name="example-textarea-input"
                                    rows="6"
                                    onChange={(e) =>
                                        setValue('body', e.target.value, {
                                            shouldValidate: true,
                                        })
                                    }
                                    placeholder="توضیحات را وارد کنید"
                                ></textarea>
                                <div className="invalid-feedback">
                                    {errors?.body?.message}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-square btn-outline-success min-width-125 my-2"
                            >
                                ویرایش
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editModal: (bool) => dispatch(ShowModalEditOpen(bool)),
        categoryEditRequest : (data) => dispatch(CategoryEditRequest(data))
    }
}

const getStateToProps = (state) => ({
    show_modal_edit_category: state.category.editModal,
    editData: state.category.edit,
})

export default connect(getStateToProps, mapDispatchToProps)(CategoryCrate)
