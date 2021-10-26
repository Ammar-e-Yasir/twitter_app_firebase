import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { db, doc, setDoc, collection,query,orderBy,addDoc } from "../configs/firebase"


export default function MyComponent() {
    const { state } = useContext(GlobalContext);


    const [tweet, setUserTweet] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // const [alltweets, setAllTweets] = useState([]);



    const addTweet = async () => {

        let Obj = {
            username: state.authUser.username,
            time: new Date().toLocaleString(),
            tweet: tweet,
            uid: state.authUser.uid
        }

        console.log(Obj)

        if (tweet.length > 80) {
            setErrMsg('write maximum 80 characters');
            setTimeout(() => { setErrMsg('') }, 2000)
        }
        else {

            let tweetRef = doc(collection(db, 'tweets'));
            await setDoc(tweetRef, Obj);
          


            setUserTweet('');


        }



    }

    return (


        <div className="form-group w-50 mx-auto" >
            {errMsg ? <small className="form-text text-muted">{errMsg}</small> : null}

            <textarea className="form-control border border-secondary shadow-none" rows='5' placeholder='write something !' value={tweet} onChange={(ev) => { setUserTweet(ev.target.value) }} ></textarea>
            <div className='nav justify-content-end p-3'>
                {tweet ? <button className='btn btn-primary' onClick={addTweet}>Post</button> : null}
            </div>
        </div>




    )
}

