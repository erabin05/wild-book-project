import React, {useState} from 'react'
import './_log.scss'

const Log = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main className='log'>
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
                <button className='log-button'>Log in</button>
            </form>
        </main>
    )
}

export default Log