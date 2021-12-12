import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

import { SocketContext, socket } from '../context/socket'

const ParenrElement = ({ children, ...props }) => {
    const router = useRouter()

    const [className, setClassName] = useState('true')

    useEffect(() => {
        if (router.route == '/login') {
            setClassName(
                `boxicon-layout no-card-shadow 1-column blank-page bg-full-screen-image`,
            )
        } else {
            setClassName(
                `parent__all_element vertical-layout vertical-menu-modern navbar-sticky chat-application  ${
                    props.get_sidebar ? 'menu-collapsed' : ''
                }`,
            )
        }
    }, [router, props.get_sidebar])

    return (
        <SocketContext.Provider value={socket}>
            <div className={className} {...props}>
                {children}
            </div>
        </SocketContext.Provider>
    )
}

const mapStateToProps = (state) => ({
    get_sidebar: state.theme.get_sidebar,
})

export default connect(mapStateToProps)(ParenrElement)
