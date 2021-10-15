import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { useContext, useState, useEffect } from "react";
import { collection, db, getDocs } from "../configs/firebase";
// 

export default function Home() {
    const { state, dispatch } = useContext(GlobalContext);
    const [alltweet, setAllTweet] = useState([]);
    const [count, setCount] = useState(0);
    const [docId, setDocId] = useState([]);











    useEffect(async () => {
        let allTweetRef = collection(db, 'tweets');
        let usersTweet = await getDocs(allTweetRef);
        usersTweet.forEach((doc) => {
            // console.log(doc.id, doc.data());
            let d = doc.data();

            let element = ` <div id=${doc.id} class='main'>
            <h1>${d.username}</h1>
            <h4>${d.tweet}</h4>
            <button>Like${d.like}</button>
            <button>Unlike ${d.unlike}</button>
            </div>`;

            document.getElementById('asd').innerHTML += element;


            // let alltweetClone = alltweet.slice(0);
            // alltweetClone.push(doc.data());
            // setAllTweet(alltweetClone);


        });

        // let a = document.getElementById('asd').children;
        // for (let i = 0; i < a.length; i++) {
        //     let docIdClone = docId.slice(0);
        //     docIdClone.push(a[i].id)
        //     setDocId(docIdClone)

        // }






        // dispatch({type: "TWEETS", payload: mytweet });

    }, [])






 


    return (


        <div>


            <li><Link to='/write'>Add Tweet</Link></li>

            <div id='asd'></div>




        </div>
       

    );


}

