import React, { useEffect, useState } from "react"
import style from "./Nav.module.css"
import { Link } from "react-scroll"

export const Navigation = () => {
  const [NavClass, setNavClass] = useState(style.Nav)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavClass([style.Nav, style.Navsticky].join(" ")) // appends Navstick-style to Nav-style
      } else {
        setNavClass(style.Nav)
      }
    })
  }, [])

  return (
    <ul className={NavClass}>
      <li className={style.NavItem}>
        <Link
          className={style.NavLink}
          to='introduction'
          smooth={true}
          duration={250}
        >
          About
        </Link>
      </li>

      <li className={style.NavItem}>
        <Link className={style.NavLink} to='work' smooth={true} duration={250}>
          Work
        </Link>
      </li>

      <li className={style.NavItem}>
        <Link
          className={style.NavLink}
          to='contact'
          smooth={true}
          duration={250}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
