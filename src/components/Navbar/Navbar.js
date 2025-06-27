// import { useContext, useState } from 'react'
// import Brightness2Icon from '@material-ui/icons/Brightness2'
// import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
// import MenuIcon from '@material-ui/icons/Menu'
// import CloseIcon from '@material-ui/icons/Close'
// import { ThemeContext } from '../../contexts/theme'
// import { projects, skills, contact } from '../../portfolio'
// import './Navbar.css'

// const Navbar = () => {
//   const [{ themeName, toggleTheme }] = useContext(ThemeContext)
//   const [showNavList, setShowNavList] = useState(false)

//   const toggleNavList = () => setShowNavList(!showNavList)

//   return (
//     <nav className='center nav'>
//       <ul
//         style={{ display: showNavList ? 'flex' : null }}
//         className='nav__list'
//       >
//         {projects.length ? (
//           <li className='nav__list-item'>
//             <a
//               href='#projects'
//               onClick={toggleNavList}
//               className='link link--nav'
//             >
//               Projects
//             </a>
//           </li>
//         ) : null}

//         {skills.length ? (
//           <li className='nav__list-item'>
//             <a
//               href='#skills'
//               onClick={toggleNavList}
//               className='link link--nav'
//             >
//               Skills
//             </a>
//           </li>
//         ) : null}

//         {contact.email ? (
//           <li className='nav__list-item'>
//             <a
//               href='#contact'
//               onClick={toggleNavList}
//               className='link link--nav'
//             >
//               Contact
//             </a>
//           </li>
//         ) : null}
//       </ul>

//       <button
//         type='button'
//         onClick={toggleTheme}
//         className='btn btn--icon nav__theme'
//         aria-label='toggle theme'
//       >
//         {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
//       </button>

//       <button
//         type='button'
//         onClick={toggleNavList}
//         className='btn btn--icon nav__hamburger'
//         aria-label='toggle navigation'
//       >
//         {showNavList ? <CloseIcon /> : <MenuIcon />}
//       </button>
//     </nav>
//   )
// }

// export default Navbar
import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, about } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const { name, role, description, resume, social } = about
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              PROJECTS
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              SKILLS
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              CONTACT
            </a>
          </li>
        ) : null}
        {about.social.github ? (
          <li className='nav__list-item'>
            <a
              target='_blank' rel='noopener noreferrer'
              href={social.github}
              aria-label='github'
              className='link link--nav'
            >
              GitHub
            </a>
          </li>
        ) : null}
        {about.social.linkedin ? (
          <li className='nav__list-item'>
            <a
              target='_blank' rel='noopener noreferrer'
              href={social.linkedin}
              aria-label='linkedin'
              className='link link--nav'
            >
              linkedin
            </a>
          </li>
        ) : null}
        {about.resume ? (
          <li className='nav__list-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={about.resume}
              aria-label='resume'
              className='link link--nav'
            >
              Resume
            </a>
          </li>
        ) : null}

      </ul>

      <button
      type="button"
      onClick={toggleTheme}
      className="btn btn--icon nav__theme"
      aria-label="toggle theme"
    >
      {/* Show icon based on the theme */}
      {themeName === 'dark' ? (
        <WbSunnyRoundedIcon /> // Dark mode, show WbSunnyRoundedIcon
      ) : (
        <Brightness2Icon /> // Light mode, show Brightness2Icon
      )}
    </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>

  )
}

export default Navbar
