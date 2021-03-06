import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({nav, blurb, onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
        <span className={styles.blurb}>
          {blurb}
        </span>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      {nav && nav.length > 0 && (
        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            {nav.map(nav => (
              <li key={nav._key}>
                <a href={nav.url}>{nav.linkText}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  </div>
)

export default Header
