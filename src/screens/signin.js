import React, {useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../configs/firebase';
import { Link } from 'react-router-dom';
import {useHistory} from 'react'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const login = async () => {
        
        try {
         await signInWithEmailAndPassword(auth, email, password);
        } 

        catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 9000)
        }
    }

    return (
        // <div>
        //     <fieldset>
        //         <legend><h1>LOGIN !</h1></legend>
        //     <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
        //     <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
        //     <button onClick={signin}>Signin</button>
        //     {errMsg ? <p>{errMsg}</p> : null}
        //     </fieldset>
        // </div>
        <div className='container'>


        <div className='w-75 mx-auto p-5 border bg-light' style={{marginTop:'10%'}}>
        <h1 className='text-white text-center rounded ' style={{backgroundColor:'#0f9afb'}}>USER LOGIN !</h1>

            
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control shadow-none"  aria-describedby="emailHelp" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
                {errMsg ? <small  className="form-text text-muted">{errMsg}</small> : null}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control shadow-none" value={password} onChange={(ev) => { setPassword(ev.target.value) }} />
                {errMsg ? <small  className="form-text text-muted">{errMsg}</small> : null}

            </div>

            <button className="btn btn-outline-primary shadow-none mt-5" onClick={login}>Login</button>
            <p className='text-center'>Don't have an account ? <Link to='/signup'>register</Link></p>
        </div>


    </div>
    )
}

export default SignIn;