import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <>
            <ul>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/signin'>Signin</Link>
                </li>
            </ul>
        </>

    );
}