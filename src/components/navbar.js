import React, { useContext} from "react";
import {
    Link
} from "react-router-dom";
import { GlobalContext } from "../context/context";
import {auth,signOut} from '../configs/firebase'
import { useEffect,useHistory } from "react-router-dom";

export default function Nav() {
    let history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);


    const logOut = async ()=>{
        try {
            
            await signOut(auth);
history.push('/signin');
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <nav>
            <ul>

                {state.authUser ?
                    null : <>
                        <li>
                            <Link to="/">Signup</Link>
                        </li>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                    </>

                }

                {
                    state.authUser ?
                        <>

                            <li>
                                <Link to="/user-home">Userhome</Link>
                            </li>
                            <li>
                                <Link to="/user-tweet">My Tweets</Link>
                            </li>
                            <li>
                                <Link to="/user-profile">Profile</Link>
                            </li>
                            <button onClick={logOut}>logout</button>




                        </> : null
                }

            </ul>
        </nav>
    )
}

