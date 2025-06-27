import uniqid from 'uniqid'
import { tools } from '../../portfolio'
import './Tools.css'

const Tools = () => {
  if (!tools.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>TOOLS</h2>
      <ul className='skills__list'>
        {tools.map((tool) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {tool}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tools
