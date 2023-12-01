import {useState} from 'react'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const submitHandler = async (event) => {
    event.preventDefault()

    const userObj = {
      name,
      email,
      password
    }

    const response = await fetch('https://ill-red-bison-hose.cyclic.app', {
      method: 'POST',
      body: JSON.stringify(userObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const parsedResponse = await response.json()

    console.log("The parsed response", parsedResponse)

  }

  const setNameHandler = event => {
    setName(event.target.value)
  }

  const setEmailHandler = event => {
    setEmail(event.target.value)
  }

  const setPasswordHandler = event => {
    setPassword(event.target.value)
  }

  return <div>
    <h1> Admin Login/Signup </h1>
    <form onSubmit={submitHandler}>
      Email:- <input type="email" value={email} onChange={setEmailHandler} /><br/>
      Name:- <input type="text" value={name} onChange={setNameHandler} /> <br/>
      Password:- <input type="password" value={password} onChange={setPasswordHandler} /><br/>
      <button type="submit" > Submit </button>

    </form>
  </div>

}

export default Login