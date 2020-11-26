import React, { useState } from 'react'
import { render } from 'react-dom'

const Formulaire = (props) => {

  const [message, setMessage] = useState({})
  const [length, setLength] = useState(props.maxLength)

  const createMessage = () => {

    props.addMessage(message)

    // Reset
    setMessage({})
    setLength(props.maxLength)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createMessage()
  }

  const handleChange = event => {
    const { name, value } = event.target
    setMessage((m) => ({ ...m, [name]: value }))
    setLength(event.target.value.length)
  }

  const handleKeyUp = event => {
    if (event.key === 'Enter')
      createMessage()
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea value={message.message ? message.message : ""} name='message' onChange={handleChange} placeholder='message' required maxLength={props.maxLength} onKeyUp={handleKeyUp} />
        <div className='info'>{props.maxLength - length}</div>
        <button type='submit'>Envoyer!</button>
      </form>
    </div>
  )
}

export default Formulaire
