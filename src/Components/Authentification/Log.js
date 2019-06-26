import React, {useState} from 'react'
import axios from 'axios'
import './_log.scss'

const Log = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logMsg, setLogMsg] = useState({})

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
                <label htmlFor="username">User</label>
                <input 
                    id ='username'
                    type='text'
                    placeholder='User'
                    autoComplete="off"
                    value={username}
                    onChange={e => 
                        setUsername(e.target.value)
                    }
                />
                <label htmlFor="password">Password</label>
                <input 
                    id='password'
                    type='password'
                    placeholder='Password'
                    autoComplete="off"
                    value={password}
                    onChange={e => 
                        setPassword(e.target.value)
                    }
                />
                {
                    logMsg.message && <div className={`log-msg`}>{logMsg && logMsg.message}</div>
                }
                <button 
                    className='log-button'
                    type="button"
                    onClick={()=>{
                        axios.post(`${process.env.REACT_APP_URL_API}/login`, {username, password})
                            .then(res => {
                                localStorage.setItem('wildPortfolioToken', res.data.token);
                                console.log(res.data)
                                setLogMsg(res.data)
                            })
                    }}
                >Log in</button>
            </form>
        </main>
    )
}

export default Log