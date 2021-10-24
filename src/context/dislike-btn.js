import react, { useContext,useState } from "react";
import { GlobalContext } from "./context";


export default function DislikeBtn(){
    const {state} = useContext(GlobalContext);
    const [dislikers,setDisLikers] = useState([]);
    const [dislike,setdislike] = useState(dislikers.length);
    const id = state.authUser.uid;

    return(
        <div>
            <button onClick={()=>{
                    if (dislikers.indexOf(id) > -1){
                        dislikers.splice(dislikers.indexOf(id),1);
                        setdislike(dislikers.length)
                        console.log(dislikers.length)


                    } else{
                        dislikers.push(id)
                        setdislike(dislikers.length)
                        console.log(dislikers.length)
                    }
                console.log(dislike, dislikers.length)
            }}>
                dislike {dislike} 
            </button>
        </div>
    )
}