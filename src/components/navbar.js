import React, { useContext } from "react";
import {
    Link
} from "react-router-dom";
import { GlobalContext } from "../context/context";


function Nav() {
    const { state, dispatch } = useContext(GlobalContext);
    return (
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animal-api">Animal</Link>
                </li>
                <li>
                    <Link to="/snacks">Snacks</Link>
                </li> */}
                {state.authUser ?
                    null : <>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                    </>

                }

                {
                    state.authUser?.userRole === 'trainer' ?
                        <>
                            {/* <li>
                                <Link to="/add-student">Add Student</Link>
                            </li>
                            <li>
                                <Link to="/all-student">All Student</Link>
                            </li> */}
                            <li>
                                <Link to="/user-home">Userhome</Link>
                            </li>
                            <li>
                                <Link to="/user-tweet">My Tweets</Link>
                            </li>
                            <li>
                                <Link to="/user-profile">Profile</Link>
                            </li>
                            
                        </> : null
                }

            </ul>
        </nav>
    )
}

export default Nav;
