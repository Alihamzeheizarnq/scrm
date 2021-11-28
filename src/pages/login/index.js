import * as yup from 'yup'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import { LoginRequest } from '../../state/login/action'

import bg from './../../dist/image/login.png'

let schema = yup.object().shape({
    username: yup.string().required('پر کردن این فیلد الزامی میباشد'),
    password: yup.string().required('پر کردن این فیلد الزامی میباشد'),
})
const Login = ({ LoginRequest, showLoding }) => {
    const router = useRouter()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        LoginRequest({ data, router })
    }

    return (
        <>
            
                <>
                    <div className="app-content content">
                        <div className="content-overlay" />
                        <div className="content-wrapper">
                            <div className="content-header row"></div>
                            <div className="content-body">
                                {/* login page start */}
                                <section
                                    id="auth-login"
                                    className="row flexbox-container"
                                >
                                    <div className="col-xl-8 col-11">
                                        <div className="card bg-authentication mb-0">
                                            <div className="row m-0">
                                                {/* left section-login */}
                                                <div className="col-md-6 col-12 px-0">
                                                    <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                                        <div className="card-header pb-1">
                                                            <div className="card-title">
                                                                <h4 className="text-center mb-2">
                                                                    خوش آمدید
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="card-content">
                                                            <div className="card-body">
                                                                {/* <div className="d-flex flex-md-row flex-column justify-content-around">
                                                            <a href="#" className="btn btn-social btn-google btn-block font-small-3 mr-md-1 mb-md-0 mb-1">
                                                                <i className="bx bxl-google font-medium-3" /><span className="pl-50 d-block text-center">گوگل</span></a>
                                                            <a href="#" className="btn btn-social btn-block mt-0 btn-facebook font-small-3">
                                                                <i className="bx bxl-facebook-square font-medium-3" /><span className="pl-50 d-block text-center">فیسبوک</span></a>
                                                        </div>
                                                        <div className="divider">
                                                            <div className="divider-text text-uppercase text-muted"><small>یا توسط ایمیل وارد شوید</small>
                                                            </div>
                                                        </div> */}
                                                                <form
                                                                    onSubmit={handleSubmit(
                                                                        onSubmit,
                                                                    )}
                                                                >
                                                                    <div className="form-group mb-50">
                                                                        <label
                                                                            className="text-bold-700"
                                                                            htmlFor="exampleInputEmail1"
                                                                        >
                                                                            آدرس
                                                                            ایمیل
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            {...register(
                                                                                'username',
                                                                            )}
                                                                            className={`form-control text-left ${
                                                                                errors
                                                                                    ?.username
                                                                                    ?.message
                                                                                    ? 'is-invalid'
                                                                                    : ''
                                                                            }`}
                                                                            id="exampleInputEmail1"
                                                                            placeholder="آدرس ایمیل"
                                                                            dir="ltr"
                                                                        />
                                                                        <div className="invalid-feedback">
                                                                            {
                                                                                errors
                                                                                    ?.username
                                                                                    ?.message
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label
                                                                            className="text-bold-700"
                                                                            htmlFor="exampleInputPassword1"
                                                                        >
                                                                            رمز
                                                                            عبور
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            {...register(
                                                                                'password',
                                                                            )}
                                                                            className={`form-control text-left ${
                                                                                errors
                                                                                    ?.password
                                                                                    ?.message
                                                                                    ? 'is-invalid'
                                                                                    : ''
                                                                            }`}
                                                                            id="exampleInputPassword1"
                                                                            placeholder="رمز عبور"
                                                                            dir="ltr"
                                                                        />
                                                                        <div className="invalid-feedback">
                                                                            {
                                                                                errors
                                                                                    ?.password
                                                                                    ?.message
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                                                        <div className="text-left">
                                                                            <div className="checkbox checkbox-sm">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="form-check-input"
                                                                                    id="exampleCheck1"
                                                                                />
                                                                                <label
                                                                                    className="checkboxsmall"
                                                                                    htmlFor="exampleCheck1"
                                                                                >
                                                                                    <small>
                                                                                        مرا
                                                                                        به
                                                                                        خاطر
                                                                                        بسپار
                                                                                    </small>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        {/* <div className="text-right line-height-2"><a href="auth-forgot-password.html" className="card-link"><small>رمز عبورتان را فراموش کرده اید؟</small></a></div> */}
                                                                    </div>
                                                                    {showLoding ? (
                                                                        <button
                                                                            type="submit"
                                                                            className="btn w-100 btn-lg btn-hero btn-primary"
                                                                        >
                                                                            <span
                                                                                className="spinner-border spinner-border-sm"
                                                                                role="status"
                                                                                aria-hidden="true"
                                                                            />
                                                                            صبر
                                                                            کنید
                                                                            ...
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            type="submit"
                                                                            className="btn w-100 btn-lg btn-hero btn-primary"
                                                                        >
                                                                            <i className="fa fa-fw fa-sign-in-alt opacity-50 me-1" />
                                                                            ورود
                                                                        </button>
                                                                    )}
                                                                </form>
                                                                <hr />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* right section image */}
                                                <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                                    <div className="card-content">
                                                        <img
                                                            className="img-fluid"
                                                            src={bg.src}
                                                            alt="branding logo"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* login page ends */}
                            </div>
                        </div>
                    </div>
                    {/* END: Content*/}
                </>
            
        </>
    )
}

export async function getServerSideProps({ req }) {
    if (req.auth) {
        return req.redirectTo('/')
    }
    return {
        props: {},
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoginRequest: (data) => dispatch(LoginRequest(data)),
    }
}

const getStateToProps = (state) => ({
    showLoding: state.auth.showLoding,
    showLodingfullPage: state.auth.showLodingfullPage,
})

export default connect(getStateToProps, mapDispatchToProps)(Login)
