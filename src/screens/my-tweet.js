import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { getDocs, db, collection, query, where } from "../configs/firebase"
import "./form.css";


export default function MyTweet() {
    const { state, dispatch } = useContext(GlobalContext);
    const [mytweet, setMyTweet] = useState([]);







    useEffect(async () => {
        let mytweetRef = collection(db, 'tweets');
        let q = query(mytweetRef, where("uid", "==", state.authUser.uid))
        let myTweet = await getDocs(q);
        let my_tweet = [];
        myTweet.forEach((doc) => {
            dispatch({ type: "MY_TWEETS", payload: doc.data() });
            my_tweet.push(doc.data())

        });
        setMyTweet(my_tweet)


    }, [])









    return (

        <div>
            <h1>This is my Tweet Page ! </h1>

            <li><Link to='/write'>Add Tweet</Link></li>


            {
                mytweet.map(({username,time,tweet}, index) => {
                    return (
                        <div className="main" key={index}>
                            <h1>{username}</h1>
                            <h4>{time}</h4>
                            <h3>{tweet}</h3>
                           
                        </div>

                    )
                })

            }
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