import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { getDocs, db, collection, query, where } from "../configs/firebase"
import "./form.css";
import MyComponent from "./my-component";


export default function MyTweet() {
    const { state, dispatch } = useContext(GlobalContext);
    const [mytweet, setMyTweet] = useState([]);







    useEffect(() => {
        const b = async()=>{
        let mytweetRef = collection(db, 'tweets');
        let q = query(mytweetRef, where("uid", "==", state.authUser.uid))
        let myTweet = await getDocs(q);
        let my_tweet = [];
        myTweet.forEach((doc) => {
            dispatch({ type: "MY_TWEETS", payload: doc.data() });
            my_tweet.push(doc.data())

        });
        setMyTweet(my_tweet)
    }
    b()

    }, [])









    return (

        <div className='w-75 mx-auto mt-3'>
            <MyComponent/>


            {
                mytweet.map(({username,time,tweet}, index) => {


                    return(
                    <div className='w-50 mx-auto border p-2 mb-5' key={index}>
                    <div className='d-flex flex-row justify-content-between'>
                    <h1>{username.replace(username[0],username[0].toUpperCase())}</h1>
                    <p className='pt-2 font-weight-normal'>{time}</p>
                    </div>
                    <p>{tweet}</p>
                    
                 
            


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