import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

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
                `parent__all_element vertical-layout vertical-menu-modern navbar-sticky  ${
                    props.get_sidebar ? 'menu-collapsed' : ''
                }`,
            )
        }
    }, [router, props.get_sidebar])

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

const mapStateToProps = (state) => ({
    get_sidebar: state.theme.get_sidebar,
})

export default connect(mapStateToProps)(ParenrElement)
