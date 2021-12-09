import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
    CategoryCreateRequest,
    ShowCategoryModal,
} from '../../../state/category/action'

let schema = yup.object().shape({
    title: yup.string().required('پر کردن این فیلد الزامی میباشد'),
    body: yup.string().required('پر کردن این فیلد الزامی میباشد'),
})

const CategoryCrate = ({
    CategoryCreateRequest,
    show_modal_category,
    ShowModal,
}) => {
    const router = useRouter()

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        data.type = 'user'
        CategoryCreateRequest({ data, router })
    }

    useEffect(() => {
        setValue('title', '')
        setValue('body', '')
        reset()
    }, [show_modal_category])

    return (
        <>
            <div
                className={`customizer  d-md-block ${
                    show_modal_category ? 'open' : ''
                }`}
            >
                <a
                    className="customizer-close"
                    href="#"
                    onClick={(e) => {
                        ShowModal(false)
                    }}
                >
                    <i className="bx bx-x" />
                </a>
                <a
                    className="customizer-toggle"
                    href="#"
                    onClick={(e) => {
                        ShowModal(!show_modal_category)
                    }}
                >
                    <i
                        className={`bx  bx bx-spin ${
                            show_modal_category
                                ? 'bx-cog white'
                                : 'bx-plus white'
                        } `}
                    />
                </a>
                <div className="customizer-content p-2 ps ps--active-y">
                    <h4 className="text-uppercase mb-0 mt-n50">
                        افزودن دسته بندی
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
                                ایجاد
                            </button>
                        </div>
                    </form>

                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                        <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        ShowModal: (bool) => dispatch(ShowCategoryModal(bool)),
        CategoryCreateRequest: (data) => dispatch(CategoryCreateRequest(data)),
    }
}

const getStateToProps = (state) => ({
    show_modal_category: state.category.showModel,
})

export default connect(getStateToProps, mapDispatchToProps)(CategoryCrate)
