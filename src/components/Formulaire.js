import React, { useState } from 'react'

const Formulaire = (props) => {

  const [message, setMessage] = useState({})

  const createMessage = () => {
    // console.log("d", props)
    // const { addMessage, pseudo } = props

    props.addMessage(message)

    // Reset
    setMessage({})
  }

  const handleSubmit = event => {
    event.preventDefault()
    createMessage()
  }

  const handleChange = event => {
    const { name, value } = event.target
    setMessage((m) => ({ ...m, [name]: value }))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea value={message.message ? message.message : ""} name='message' onChange={handleChange} placeholder='message' required maxLength='140' />
        <div className='info'>140</div>
        <button type='submit'>Envoyer!</button>
      </form>
    </div>
  )
}

export default Formulaire
