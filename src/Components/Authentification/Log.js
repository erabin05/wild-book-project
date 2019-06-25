import React, {useState} from 'react'
import axios from 'axios'
import './_log.scss'

const Log = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main className='log'>
            <figure>
                <img 
                    src={require('../../logo-wild-white.png')} 
                    alt='wild code school'
                />
            </figure>
            <h1>Students projects</h1>
            <form>
                <label for="username">User</label>
                <input 
                    id ='username'
                    type='email'
                    placeholder='User'
                    autocomplete="off"
                    value={username}
                    onChange={e => 
                        setUsername(e.target.value)
                    }
                />
                <label for="password">Password</label>
                <input 
                    id='password'
                    type='password'
                    placeholder='Password'
                    autocomplete="off"
                    value={password}
                    onChange={e => 
                        setPassword(e.target.value)
                    }
                />
                <button 
                    className='log-button'
                    onClick={()=>{
                        axios.post(`${process.env.REACT_APP_URL_API}/login`, {username, password})
                            .then(res => console.log(res))
                    }}
                >Log in</button>
            </form>
        </main>
    )
}

export default Log