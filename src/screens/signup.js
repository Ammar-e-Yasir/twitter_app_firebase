import React, { useContext, useState,useEffect } from 'react';
import { GlobalContext } from '../context/context';
import './form.css';
import { auth, createUserWithEmailAndPassword, db, setDoc, doc,collection,getDocs } from '../configs/firebase';

function SignUp() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [username, setUserName] = useState('');
    const [usernameErr , setUserNameErr] = useState('');
    const [allUserName , setAllUserName] = useState([]);

    const register = async () => {
        try {
            // console.log({ email, userRole })
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'users', user.uid)
            await setDoc(dataRef, {
                username:username,
                email: user.email,
                uid: user.uid,
            });

        } catch (err) {
            console.log(err.message)
            // setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 2000)


switch(err.message){


    // case 'Firebase: Error (auth/invalid-email).':
    // setErrMsg('invalid email');
    // break; 
    case 'Firebase: Error (auth/invalid-email).':
    setErrMsg('fill all fields');
    break; 

    case 'Firebase: Error (auth/missing-email).':
    setErrMsg('missing email field');
    break; 

    
    

    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
    setErrMsg('password should be at least 6 characters');
    break; 
    case 'Firebase: Error (auth/internal-error).':
    setErrMsg('fill all fields correct');
    break; 
}










            
        }
    }






    // console.log(allUserName)

    // let allUsernameClone = allUserName.slice(0);
    // allUsernameClone.push()
    // console.log(allUsernameClone)

    useEffect(async () => {
        let allTweetRef = collection(db, 'users');
        let usersTweet = await getDocs(allTweetRef);
        usersTweet.forEach((doc) => {
            // console.log(doc.id, doc.data().username);

        //    let  usernameData = doc.data().username;
    

             let allUsernameClone = allUserName.slice(0);
            //  console.log(allUsernameClone)
             allUsernameClone.push(doc.data());
             setAllUserName(allUsernameClone);
            // setAllUserName(usernameData)
        
        });
        // console.log(allUserName)

        // dispatch({type: "TWEETS", payload: mytweet });

    }, [])

    useEffect(()=>{
        console.log(allUserName)

    },[allUserName])


  














    //  if(username === ''){
    //      setUserNameErr('Enter your name .');

    //  }
    //  else if(username === state.authUser.username){
    //      setUserNameErr('User name is already taken .')

    //  }









    return (
        <div>
            <fieldset>
                <legend><h1>REGISTER !</h1></legend>
            <label>Username<input type="text" value={username} onChange={(ev) => { setUserName(ev.target.value) }} /></label>
            {usernameErr? <p>{usernameErr}</p>:null}
        
        
            <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
        
        
            <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
        
        
            {/* <select name="role" onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='trainer'>Trainer</option>
                <option value='student'>Student</option>
            </select> */}
        
        
            <button onClick={register}>Register</button>
            
            {errMsg ? <p>{errMsg}</p> : null}


            </fieldset>
        </div>
    )
}

export default SignUp;