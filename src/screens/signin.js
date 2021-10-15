import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { auth, signInWithEmailAndPassword } from '../configs/firebase';

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const signin = async () => {

        
        try {
            let { user } = await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 9000)
        }
    }

    return (
        <div>
            <fieldset>
                <legend><h1>LOGIN !</h1></legend>
            <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
            <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
            <button onClick={signin}>Signin</button>
            {errMsg ? <p>{errMsg}</p> : null}
            </fieldset>
        </div>
    )
}

export default Snacks;