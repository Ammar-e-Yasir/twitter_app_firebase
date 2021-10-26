import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function MyProfile(){
   const {state} =  useContext(GlobalContext)
    return(
        <div className='w-50 mx-auto border p-2 mt-5 text-center '>
                            <h1 className='bg-secondary w-100 text-light rounded'>Username : {state.authUser.username.replace(state.authUser.username[0],state.authUser.username[0].toUpperCase())}</h1>
                            <p>User id : {state.authUser.uid}</p>
                            <h2>User Email :  {state.authUser.email}</h2>
                       
                            
                    
                         
                    
        

                        </div>
    )
}