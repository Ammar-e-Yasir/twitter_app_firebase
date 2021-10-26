import  { useContext,useState } from "react";
import { GlobalContext } from "../context/context";


export default function DislikeBtn(){
    const {state} = useContext(GlobalContext);
    const [dislikers] = useState([]);
    const [dislike,setdislike] = useState(dislikers.length);
    const id = state.authUser.uid;

    return(
        <div className='d-inline px-2'>
            <button className='btn btn-primary shadow-none' onClick={()=>{
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