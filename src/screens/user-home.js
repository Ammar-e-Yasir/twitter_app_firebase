import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { useContext, useState, useEffect } from "react";
import { collection, db, getDocs, doc, updateDoc, onSnapshot } from "../configs/firebase";
import LikeBtn from "../context/like-btn";
import DislikeBtn from "../context/dislike-btn";
// 

export default function UserHome() {
    const { state, dispatch } = useContext(GlobalContext);


    useEffect(async () => {
        let tweetsRef = collection(db, 'tweets');
        let userAllTweet = await getDocs(tweetsRef);

        // let allTweetClone = alltweet.slice(0);
        userAllTweet.forEach((doc) => {
            let obj = doc.data();
            obj.id = doc.id;
            // allTweetClone.push(obj);


            dispatch({ type: "ALL_TWEETS", payload: obj })

        });

        // setAllTweet(allTweetClone);

    }, [])


    const likeTweet = async (e) => {
        // if (clicked) {
        //     let tweetId = e.target.parentNode.id;
        //     console.log('like', e.target.parentNode);

        //     const washingtonRef = doc(db, "tweets", tweetId);

        //     // Set the "capital" field of the city 'DC'
        //     await updateDoc(washingtonRef, {
        //         like: 1
        //     });


        //     const unsub = onSnapshot(doc(db, "tweets", tweetId), (doc) => {
        //         console.log("Current data: ", doc.data());

        //     });

        //     setClicked(false);
        // }
        let a = e.target.parentNode;
        console.log(a)
        dispatch({type : "LIKE_DATA" , payload: a})
    }


    

    const unlikeTweet = (e) => {
        if (clicked) {
            console.log('unlike', e.target.parentNode);
            setClicked(false)

        }
    }



  



    return (


        <div>

<h1>This is User Home Page </h1>
            <li><Link to='/write'>Add Tweet</Link></li>
            {
                
                state.allTweets.map(({ username, tweet, time, id }, index) => {
                    // console.log(id)
                
                    return (

                    
                        <div className='tweet' key={index} id={id}>
                            <h1>{username}</h1>
                            <p>{time}</p>
                            <p>{tweet}</p>
                            

  

                            <div style={{display:'flex'}}>
                                {/* <button onClick={likeTweet}> like{like}</button>
                                <button onClick={unlikeTweet}>dislike{unlike}</button> */}
                                <LikeBtn/><DislikeBtn/>
                            </div>
                    
        

                        </div>
                    )
                })



            }

        </div>


    );


}

