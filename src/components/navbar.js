import React, { useContext } from "react";
import {
    Link
} from "react-router-dom";
import { GlobalContext } from "../context/context";
import { auth, signOut } from '../configs/firebase'
import Logout from "../screens/logout";

export default function Nav() {
    const { state} = useContext(GlobalContext);


    
    
    



    return (
        <div>
            <nav className='w-75 mx-auto mt-2'>


                <ul className="nav bg-dark justify-content-center rounded">

                    {/* {state.authUser ?
                        null : <>
                            <li className="nav-item ">
                                <Link to='/' className="nav-link text-light">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signin' className="nav-link text-light">Signin</Link>
                            </li>


                        </>

                    } */}

                    {
                        state.authUser ?
                            <>
                                {/* 
                            <li>
                                <Link to="/user-home">Userhome</Link>
                            </li>
                            <li>
                                <Link to="/user-tweet">My Tweets</Link>
                            </li>
                            <li>
                                <Link to="/user-profile">Profile</Link>
                            </li>
                            <button onClick={logOut}>logout</button> */}


                                <li className="nav-item ">
                                    <Link to='/' className="nav-link text-light">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/user-tweet' className="nav-link text-light">My Tweet</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/user-profile' className="nav-link text-light">Profile</Link>
                                </li>
                                <Logout/>





                            </> : null
                    }

                </ul>


            </nav>

        </div>
    )
}

