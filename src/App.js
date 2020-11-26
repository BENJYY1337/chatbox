import React, { useState } from 'react'
import { render } from 'react-dom'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

const App = (props) => {

  const [message, setMessage] = useState({})
  const [pseudo, setPseudo] = useState(props.match.params.pseudo)

  const addMessage = message => {
    const messages = { ...messages }
    messages[`message-${Date.now()}`] = message
    setMessage({ messages })
  }

  return (
    <div className='box' >
      <div>
        <div className="messages">
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      <Formulaire
        maxLength={140}
        pseudo={pseudo}
        addMessage={addMessage} />
    </div>
  )
}

export default App
