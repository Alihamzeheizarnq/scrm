import Link from 'next/link'
import { memo, useState } from 'react'
import { connect } from 'react-redux'
import { openSidebarRightSet } from '../../state/theme/action'
import logo from '../../dist/image/s-logo.png'
import ActiveLink from '../utils/ActiveLink'
import { OpenMenu } from '../utils/ActiveNav'

const SideBar = ({ SetSidebarToggle, getSidebar }) => {
    const [expanded, setExpanded] = useState(true)

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
                    iterator.classList.remove(
                        'open',
                        'has-sub',
                        'sidebar-group-active',
                    )
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
        if (getSidebar) {
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
                            <a className="navbar-brand" href={true}>
                                <div className="brand-logo">
                                    <img className="logo" src={logo.src} />
                                </div>
                                <h2 className="brand-text mb-0">Scrm</h2>
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
                                        SetSidebarToggle(!getSidebar)
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

                        <li className="nav-item">
                            <Link href="/">
                                <a onClick={handleSideBar}>
                                    <i className="bx bxs-conversation"></i>
                                    <span className="menu-title" data-i18n>
                                        گفتگو
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bx-user"></i>
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
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bx-transfer"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    معاملات
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
                                                لیست معملات
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
                                                افزودن معامله جدید
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxs-briefcase"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    کارها
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
                                                لیست کارها
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
                                                ایجاد کار
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxl-slack-old"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    فعالیت ها
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
                                                لیست فعالیت ها
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
                                                ایجاد فعالیت
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxs-factory"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    شرکت ها
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
                                                لیست شرکت ها
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
                                                ایجاد شرکت
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bx-notepad"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    یادداشت ها
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
                                                لیست یادداشت ها
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
                                                ایجاد یادداشت
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxs-message"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    پیامک ها
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
                                                لیست پیامک ها
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
                                                ارسال پیامک
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxs-book-content"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    فاکتور ها
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
                                                لیست فاکتور ها
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bxs-report"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    گزارشات
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
                                                لیست گزارشات
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item all-tab-user ">
                            <a href={true} onClick={handleSideBar}>
                                <i class="bx bx-reset"></i>
                                <span
                                    className="menu-title"
                                    style={{ flexGrow: 1 }}
                                    data-i18n="Starter kit"
                                >
                                    تنظبمات
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
                                                تنظیمات
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

const mapDispatchToProps = (dispatch) => {
    return {
        SetSidebarToggle: (bool) => dispatch(openSidebarRightSet(bool)),
    }
}

const getStateToProps = (state) => ({
    getSidebar: state.theme.get_sidebar,
})

export default connect(getStateToProps, mapDispatchToProps)(memo(SideBar))
