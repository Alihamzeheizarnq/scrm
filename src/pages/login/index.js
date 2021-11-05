import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";

import bg from './../../dist/image/photo17@2x.jpg'
import { useEffect } from "react";
import { connect } from "react-redux";
import { LoginRequest } from "../../state/login/action";

let schema = yup.object().shape({
    username: yup.string().required('پر کردن این فیلد الزامی میباشد'),
    password: yup.string().required('پر کردن این فیلد الزامی میباشد'),

});
const Login = ({ LoginRequest, showLoding }) => {
    const router = useRouter();


    const { register, setError, handleSubmit, formState: { errors }
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        LoginRequest({ data, router });
    };

    return (
        <>
            <div id="page-container">
                <main id="main-container">
                    <div className="bg-image" style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className="row g-0 bg-primary-op">
                            <div className="hero-static col-md-6 d-flex align-items-center bg-body-extra-light">
                                <div className="p-3 w-100">
                                    <div className="mb-3 text-center">
                                        <a className="link-fx fw-bold fs-1" href="index.html">
                                            <span className="text-dark">ثر</span><span className="text-primary">یا</span>
                                        </a>
                                        <p className="text-uppercase fw-bold fs-sm text-muted">صفحه ورود</p>
                                    </div>
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-sm-8 col-xl-6">
                                            <form className="js-validation-signin" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="py-3">
                                                    <div className="mb-4">
                                                        <input type="text"
                                                            className={`form-control form-control-lg form-control-alt ${errors?.username?.message ? 'is-invalid' : ''}`}
                                                            id="login-username"
                                                            name="login-username"
                                                            placeholder="نام کاربری"
                                                            {...register('username')}
                                                        />
                                                        <div className="invalid-feedback">{errors?.username?.message}</div>

                                                    </div>
                                                    <div className="mb-4">
                                                        <input
                                                            type="password"
                                                            className={`form-control form-control-lg form-control-alt ${errors?.password?.message ? 'is-invalid' : ''}`}
                                                            id="login-password"
                                                            name="login-password"
                                                            placeholder="رمز عبور"
                                                            {...register('password')}

                                                        />
                                                        <div className="invalid-feedback">{errors?.password?.message}</div>

                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    {
                                                        showLoding ? (
                                                            <button type="submit" className="btn w-100 btn-lg btn-hero btn-primary">
                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                                                صبر کنید ...
                                                            </button>
                                                        ) : (
                                                            <button type="submit" className="btn w-100 btn-lg btn-hero btn-primary">
                                                                <i className="fa fa-fw fa-sign-in-alt opacity-50 me-1" /> ورود
                                                            </button>
                                                        )
                                                    }


                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                                <div className="p-3">
                                    <p className="display-4 fw-bold text-white mb-3">
                                        سامانه مدیریت مشتری
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>



        </>
    )
}

export async function getServerSideProps({ req }) {
    if (req.auth) {
        return req.redirectTo('/');
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
})


export default connect(getStateToProps, mapDispatchToProps)(Login);