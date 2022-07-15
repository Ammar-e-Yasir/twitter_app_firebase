import React, {useState } from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword, db, setDoc, doc, } from '../configs/firebase';


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [username, setUserName] = useState('');
    // const [usernameErr, setUserNameErr] = useState('');


    const register = async () => {




        try {
            // state.allUsers.map(async (data)=>{
            //     if(data.username != username){
            //         let { user } = await createUserWithEmailAndPassword(auth, email, password);
            //         let dataRef = doc(db, 'users', user.uid);
            //         await setDoc(dataRef, {
            //             username: username,
            //             email: user.email,
            //             uid: user.uid,
            //         });
            //     }else{
            //         console.log('Username already Exists')
            //     }
            // })

            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'users', user.uid);
            await setDoc(dataRef, {
                username: username,
                email: user.email,
                uid: user.uid,
            });



                }


        catch (err) {
            console.log(err.message)
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 2000)

        }

















        // switch(err.message){


        //     // case 'Firebase: Error (auth/invalid-email).':
        //     // setErrMsg('invalid email');
        //     // break; 
        //     case 'Firebase: Error (auth/invalid-email).':
        //     setErrMsg('fill all fields');
        //     break; 

        //     case 'Firebase: Error (auth/missing-email).':
        //     setErrMsg('missing email field');
        //     break; 




        //     case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        //     setErrMsg('password should be at least 6 characters');
        //     break; 
        //     case 'Firebase: Error (auth/internal-error).':
        //     setErrMsg('fill all fields correct');
        //     break; 
        // }





    }









    // console.log(allUserName)

    // let allUsernameClone = allUserName.slice(0);
    // allUsernameClone.push()
    // console.log(allUsernameClone)

    // useEffect(async () => {
    //     let allTweetRef = collection(db, 'users');
    //     let usersTweet = await getDocs(allTweetRef);
    //     usersTweet.forEach((doc) => {
    //         // console.log(doc.id, doc.data().username);

    //     //    let  usernameData = doc.data().username;


    //          let allUsernameClone = allUserName.slice(0);
    //         //  console.log(allUsernameClone)
    //          allUsernameClone.push(doc.data());
    //          setAllUserName(allUsernameClone);
    //         // setAllUserName(usernameData)

    //     });
    //     // console.log(allUserName)

    //     // dispatch({type: "TWEETS", payload: mytweet });

    // }, [])

    // useEffect(()=>{
    //     console.log(allUserName)

    // },[allUserName])

















    //  if(username === ''){
    //      setUserNameErr('Enter your name .');

    //  }
    //  else if(username === state.authUser.username){
    //      setUserNameErr('User name is already taken .')

    //  }







    return (
        <div className='container'>


            <div className='w-75 mx-auto p-5 border bg-light' style={{marginTop:'10%'}}>
                <div className="form-group">
                    <h1 className='text-white text-center rounded ' style={{backgroundColor:'#0f9afb'}}>REGISTER !</h1>
                    <label>Username</label>
                    <input type="text" className="form-control shadow-none"  aria-describedby="emailHelp" value={username} onChange={(ev) => { setUserName(ev.target.value) }} />
                    {errMsg ? <small  className="form-text text-muted">{errMsg}</small> : null}
                </div>
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

                <button className="btn btn-outline-primary mt-4 shadow-none" onClick={register}>Register</button>
                <p className='text-center mt-3'>Already have an account ? <Link to='/'>Signin</Link></p>
            </div>


        </div>
    )
}

export default SignUp;