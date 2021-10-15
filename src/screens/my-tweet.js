import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { getDocs, db, collection, query, where } from "../configs/firebase"
import "./form.css";


export default function MyTweet() {
    const { state, dispatch } = useContext(GlobalContext);
    const [mytweet, setMyTweet] = useState([]);







    useEffect(async () => {
        let studentRef = collection(db, 'tweets');
        let q = query(studentRef, where("uid", "==", state.authUser.uid))
        let myTweet = await getDocs(q);
        myTweet.forEach((doc) => {
            // console.log(doc.id, doc.data());
            let d = doc.data();
            let element = ` <div id='main'>
            <h1>${d.username}</h1>
            <h4>${d.tweet}</h4>
            
            </div>`;

            document.getElementById('asd').innerHTML += element;










            // let myTweetClone = mytweet.slice(0);
            // myTweetClone.push(doc.data());
            // setMyTweet(myTweetClone);
        });

        // dispatch({type: "MY_TWEETS", payload: mytweet });

    }, [])









    return (

        <div>

            <li><Link to='/write'>Add Tweet</Link></li>

            <div id='asd'>

                {/* {
                mytweet.map((d, index) => {
                    return (
                        <div className="mytweet" key={index}>
                            <h1>{d.username}</h1>
                            <h4>{d.tweet}</h4>
                            <button>Like{d.like}</button>
                            <button>Unlike {d.unlike}</button>
                        </div>

                    )
                })

            } */}
            </div>
        </div>
    );















}

// const arrayOfObjects = [
//     { coffee: "Americano", size: "Medium" },
//     { coffee: "Espresso", size: "Single" },
//   ];

//   export default function MyTweet() {
//     return (
//       <p>
//         {arrayOfObjects.map(
//           ({ coffee, size }) => `Coffee type ${coffee} in a ${size} size.`
//         ).join(' ')}
//       </p>
//     );
//   }