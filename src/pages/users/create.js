import { connect } from "react-redux";

const App = () => {

    return (
        <>
            <main id="main-container">

                <div className="content">
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title"><small>Get Started</small> Blank</h3>
                            <div className="block-options pl-0">
                                <button type="button" className="btn-block-option" />
                                <button type="button" className="btn-block-option" >
                                    <i className="si si-pin" />
                                </button>
                                <button type="button" className="btn-block-option">
                                    <i className="si si-refresh" />
                                </button>
                                <button type="button" className="btn-block-option bg-primery" />
                                <button type="button" className="btn-block-option">
                                    <i className="si si-close" />
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <p>Create your own awesome project</p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
export async function getServerSideProps({ req }) {
    if (!req.auth) {
        return req.redirectTo('/login');
    }

    return {
        props: {},
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         UserFetchAction: (userId) => dispatch(UserFetchAction(userId)),
//     }
// }

// const getStateToProps = (state) => ({
//     users: state.users
// })

export default connect()(App);