import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { db, doc, setDoc, collection,addDoc } from "../configs/firebase"


export default function MyComponent() {
    const { state, dispatch } = useContext(GlobalContext);


    const [tweet, setUserTweet] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [alltweets, setAllTweets] = useState([]);



    const addTweet = async () => {

        let Obj = {
            username: state.authUser.username,
            tweet: tweet,
            date: new Date(),
            like: 0,
            unlike: 0,
            uid: state.authUser.uid
        }

        console.log(Obj)

        if (tweet.length > 80) {
            setErrMsg('write maximum 80 characters');
            setTimeout(() => { setErrMsg('') }, 2000)
        }
        else {

            let tweetRef = collection(db, 'tweets');
            let tweetData = await addDoc(tweetRef, Obj);
            console.log(tweetData);

            // let allTweetsClone = alltweets.slice(0);
            // allTweetsClone.push(tweetObj)

            // dispatch({ type: "TWEETS", payload: allTweetsClone });
            // // console.log(tweetData);

            setUserTweet('');


        }

    }

    return (
        <div>

            <label>Write Tweet<input type="text" value={tweet} onChange={(ev) => { setUserTweet(ev.target.value) }} /></label>
            {errMsg ? <span>{errMsg}</span> : null}

            <br />

            <button onClick={addTweet}>Add Tweet</button>

        </div>
    )
}

