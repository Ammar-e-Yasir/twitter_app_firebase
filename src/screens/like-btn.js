import react, { useContext,useState } from "react";
import { GlobalContext } from "../context/context";


export default function LikeBtn(){
    const {state} = useContext(GlobalContext);
    const [likers,setLikers] = useState([]);
    const [Likes,setLikes] = useState(likers.length);
    const id = state.authUser.uid;

    return(
        <div>
            <button onClick={()=>{
                    if (likers.indexOf(id) > -1){
                        likers.splice(likers.indexOf(id),1);
                        setLikes(likers.length)
                        console.log(likers.length)


                    } else{
                        likers.push(id)
                        setLikes(likers.length)
                        console.log(likers.length)
                    }
                console.log(Likes, likers.length)
            }}>
                Likes {Likes} 
            </button>
        </div>
    )
}