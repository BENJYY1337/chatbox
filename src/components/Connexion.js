import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Connexion = () => {

  const [pseudo, setPseudo] = useState({})
  const [goToChat, setGoToChat] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target
    setPseudo((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setGoToChat(true)
  }

  return (
    <React.Fragment>
      {!goToChat ?
        <div className='connexionBox'>
          <form className="connexion" onSubmit={handleSubmit}>
            <input value={pseudo.name ? pseudo.name : ""} name="name" onChange={handleChange} placeholder='Pseudo' type="text" required />
            <button type='submit'>GO</button>
          </form>
        </div>
        : <Redirect to={`/pseudo/${pseudo.name}`} />
      }
    </React.Fragment>
  )
}

export default Connexion
