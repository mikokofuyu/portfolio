import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { scrollToElement } from '../utils'

interface NavProps {
  activeMenuItem: string
}

const Nav: React.FC<NavProps> = ({ activeMenuItem }): ReactElement => {
  const history = useHistory()

  const onClickMenuItem = (menuItem: 'home' | 'projects' | 'about' | 'resume') => {
    if (menuItem !== 'resume') {
      if (history.location.pathname === '/resume') {
        history.push(`/#${menuItem}`)
      } else {
        scrollToElement(menuItem)
      }
    } else {
      history.push('/resume')
    }
  }

  const getListItemClass = (item: string) =>
    classNames(
      'h-11 text-khaki-web hover:text-morning-blue hover:border-b-2 hover:border-morning-blue flex items-center cursor-pointer',
      item === activeMenuItem || history.location.pathname.replace('/', '') === item
        ? 'border-b-2  border-morning-blue text-morning-blue'
        : '',
    )

  return (
    <nav className="fixed top-0 w-full bg-light-purple flex items-center justify-center px-2">
      <ul className="text-lg font-bold font-body flex space-x-4 xs:space-x-8 items-center" role="menu">
        <li className={getListItemClass('home')} role="none">
          <a role="menuitem" onClick={() => onClickMenuItem('home')} tabIndex={0}>
            Home
          </a>
        </li>
        <li className={getListItemClass('projects')} role="none">
          <a role="menuitem" onClick={() => onClickMenuItem('projects')} tabIndex={0}>
            Projects
          </a>
        </li>
        <li className={getListItemClass('about')} role="none">
          <a role="menuitem" onClick={() => onClickMenuItem('about')} tabIndex={0}>
            About
          </a>
        </li>
        <li className={getListItemClass('resume')} role="none">
          <a role="menuitem" onClick={() => onClickMenuItem('resume')} tabIndex={0}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
