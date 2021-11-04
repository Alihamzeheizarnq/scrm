import { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { CategoryCreateRequest, ShowCategoryModal } from "../../state/category/action";





let schema = yup.object().shape({
    title: yup.string().nullable(),
    body: yup.string().nullable(),

});

const CategoryCrate = ({ CategoryCreateRequest, show_modal_category, ShowModal }) => {
    const { register, setValue, handleSubmit, reset, formState: { errors }
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        data.type = 'user';
        CategoryCreateRequest(data);
    };


    useEffect(() => {
        setValue('title', '');
        setValue('body', '');
        reset();
    }, [show_modal_category])



    return (
        <>
            <div id="side-overlay " className={`${show_modal_category ? 'side-left-modal' : 'side-left-modal-hide'}`}>


                <div className="block h-100 pattern">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">ایجاد دسته بندی جدید</h3>
                        <div className="block-options">
                            <button onClick={e => { ShowModal(false); }} type="button" className="btn-block-option btn btn-circle btn-dual-secondary">
                                <i className="fa fa-times text-danger" />
                            </button>
                        </div>
                    </div>
                    <div className="block-content ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="example-nf-email">عنوان </label>
                                <input type="text" {...register("title")}
                                    className={`form-control ${errors?.title?.message ? 'is-invalid' : ''}`}
                                    id="example-nf-email"
                                    name="example-nf-email"
                                    placeholder="عنوان"
                                    onChange={(e) => setValue('title', e.target.value, { shouldValidate: true })}


                                />
                                <div className="invalid-feedback">{errors?.title?.message}</div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12" htmlFor="example-textarea-input">توضیحات</label>
                                <div className="col-12">
                                    <textarea className={`form-control ${errors?.body?.message ? 'is-invalid' : ''}`}
                                        {...register("body")}
                                        id="example-textarea-input"
                                        name="example-textarea-input"
                                        rows="6"
                                        onChange={(e) => setValue('body', e.target.value, { shouldValidate: true })}
                                        placeholder="توضیحات را وارد کنید"></textarea>
                                    <div className="invalid-feedback">{errors?.body?.message}</div>

                                </div>
                            </div>
                            <div>

                                <button type="submit" className="btn btn-square btn-outline-success min-width-125 mb-10">ایجاد</button>
                            </div>
                        </form>
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
    show_modal_category: state.category.showModel
})


export default connect(getStateToProps, mapDispatchToProps)(CategoryCrate);