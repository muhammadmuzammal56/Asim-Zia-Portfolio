import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 className='section__title'>Contact</h2>
      <div className="contact__options">
  <a href={`mailto:${contact.email}`}>
    <span type='button' className='btn btn--outline'>
      Email me
    </span>
  </a>
  <a href={`tel:${contact.mobile.replace(/\s/g, '')}`}>
    <span type='button' className='btn btn--outline'>
      Make a Call
    </span>
  </a>
  <a href={`https://api.whatsapp.com/send?phone=${contact.mobile.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer">
    <span type='button' className='btn btn--outline'>
      Whatsapp me
    </span>
  </a>
</div>

    </section>
  )
}

export default Contact
