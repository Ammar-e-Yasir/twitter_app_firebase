import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { useContext, useState, useEffect } from "react";
import { collection, db, getDocs } from "../configs/firebase";
// 

export default function UserHome() {
    const { state, dispatch } = useContext(GlobalContext);
    const [alltweet, setAllTweet] = useState([]);
    // const [count, setCount] = useState(0);











    useEffect(async () => {
        let tweetsRef = collection(db, 'tweets');
        let userAllTweet = await getDocs(tweetsRef);
        let a = [];
        userAllTweet.forEach((doc) => {
    

            dispatch({type:"ALL_TWEETS" , payload: doc.data()})
           a.push(doc.data())
    
            
        });
        setAllTweet(a);
        
        
        
        }, [])
        
     
        
        
        const likeTweet = ()=>{
            console.log('like');
        }
        
        const unlikeTweet = ()=>{
            console.log('unlike');
        }
        



 


    return (


        <div>


            <li><Link to='/write'>Add Tweet</Link></li>
            {
            alltweet.map(({username,tweet,date,like,unlike},index)=>{
                return(
                    <div className = 'tweet' key={index}>
                        <h1>{username}</h1>
                        <p>{date}</p>
                        <p>{tweet}</p>
                        <button onClick={likeTweet}> like{like}</button>
                        <button onClick={unlikeTweet}>dislike{unlike}</button>
                    </div>
                )
            })



            }

        </div>
       

    );


}

