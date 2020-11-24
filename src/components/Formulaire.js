import React from 'react'

const Formulaire = () => {
  return (
    <div>
      <form className="form">
        <textarea required maxLength='140' />
        <div className='info'>140</div>
        <button type='submit'>Envoyer!</button>
      </form>
    </div>
  )
}

export default Formulaire
