import Link from 'next/link'
import { memo, useState } from 'react'
import ActiveLink from '../utils/ActiveLink'
import { OpenMenu } from '../utils/ActiveNav'

const SideBar = () => {
    const [expanded, setExpanded] = useState(false)

    const handleSideBar = (e) => {
        if (e.target.tagName == 'A' || e.target.parentElement.tagName == 'A') {
            const target =
                e.target.tagName == 'A' ? e.target : e.target.parentElement
            const parent = target.parentElement
            const icon = parent.querySelector('.icon-tab')
            parent.classList.contains('open')
                ? parent.classList.remove(
                      'open',
                      'sidebar-group-active',
                      'has-sub',
                  )
                : parent.classList.add(
                      'open',
                      'sidebar-group-active',
                      'has-sub',
                  )

            if (icon) {
                if (parent.classList.contains('open')) {
                    icon.classList.remove('bx-chevron-up')
                    icon.classList.add('bx-chevron-down')
                } else {
                    icon.classList.remove('bx-chevron-down')
                    icon.classList.add('bx-chevron-up')
                }
            }

            const ul = document.querySelector('#main-menu-navigation')
            const index = Array.from(ul.children).indexOf(parent)

            let number = 0
            for (const iterator of ul.children) {
                if (number != index) {
                    iterator.classList.remove('open', 'has-sub')
                    if (iterator.querySelector('.icon-tab')) {
                        iterator
                            .querySelector('.icon-tab')
                            .classList.remove('bx-chevron-down')
                        iterator
                            .querySelector('.icon-tab')
                            .classList.add('bx-chevron-up')
                    }
                }
                number++
            }
        }
    }

    const setExpandedFunction = (bool) => {
        setExpanded(bool)

        if (bool) {
            const menuMin = document.querySelector('.menu-collapsed-open')
            if (menuMin) {
                menuMin.classList.add('open')
                menuMin.classList.remove('menu-collapsed-open')
            }
        } else {
            const menuOpen = document.querySelector('.open')
            if (menuOpen) {
                menuOpen.classList.add('menu-collapsed-open')
                menuOpen.classList.remove('open')
            }
        }
    }
    return (
        <>
            <div
                className={`main-menu menu-fixed menu-light menu-accordion menu-shadow ${
                    expanded ? 'expanded' : ''
                }`}
                data-scroll-to-active="true"
                onMouseLeave={(e) => setExpandedFunction(false)}
                onMouseOverCapture={(e) => setExpandedFunction(true)}
            >
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mr-auto">
                            <a
                                className="navbar-brand"
                                href="../../html/vertical-menu-boxicons-template/index.html"
                            >
                                <div className="brand-logo">
                                    <img
                                        className="logo"
                                        src="../../assets/images/logo/logo.png"
                                    />
                                </div>
                                <h2 className="brand-text mb-0">Frest</h2>
                            </a>
                        </li>
                        <li className="nav-item nav-toggle">
                            <a
                                className="nav-link modern-nav-toggle pr-0"
                                data-toggle="collapse"
                            >
                                <i className="bx bx-x d-block d-xl-none font-medium-4 primary" />
                                <i
                                    className="toggle-icon bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary bx"
                                    data-ticon="bx-disc"
                                    onClick={(e) =>
                                        document.body.classList.toggle(
                                            'menu-collapsed',
                                        )
                                    }
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="shadow-bottom" />
                <div className="main-menu-content">
                    <ul
                        className="navigation navigation-main"
                        id="main-menu-navigation"
                        data-menu="menu-navigation"
                        data-icon-style
                    >
                        <li className="nav-item">
                            <Link href="/">
                                <a onClick={handleSideBar}>
                                    <i className="bx bx-home-alt" />
                                    <span className="menu-title" data-i18n>
                                        داشبورد
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i className="bx bx-building" />
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    کاربران
                                </span>
                                {expanded ? (
                                    <i
                                        className="icon-tab bx bx-chevron-down"
                                        style={{ marginLeft: -8 }}
                                    />
                                ) : null}
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <Link href="/users/category">
                                        <a>
                                            <i className="bx bx-left-arrow-alt" />
                                            <span
                                                className="menu-item"
                                                data-i18n="1 column"
                                            >
                                                دسته بندی
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/users/category">
                                        <a>
                                            <i className="bx bx-left-arrow-alt" />
                                            <span
                                                className="menu-item"
                                                data-i18n="1 column"
                                            >
                                                دسته بندی
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/users/category">
                                        <a>
                                            <i className="bx bx-left-arrow-alt" />
                                            <span
                                                className="menu-item"
                                                data-i18n="1 column"
                                            >
                                                دسته بندی
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default memo(SideBar)
