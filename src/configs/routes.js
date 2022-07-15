import React, { useEffect, useContext,useHistory } from "react";
import { GlobalContext } from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUp from "../screens/signup";
import SignIn from '../screens/signin';
import { auth, onAuthStateChanged, db, doc, getDoc, collection, getDocs } from './firebase';
import UserHome from "../screens/user-home";
import MyTweet from "../screens/my-tweet";
import MyProfile from "../screens/my-profile";
import MyComponent from "../screens/my-component";
import Nav from "../components/navbar"
export default function App() {
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid);
                console.log('user found !')

            }
            else {
                console.log('user not found');
                fetchAllUserInfo();
                dispatch({ type: "AUTH_USER", payload: null });

            }
        })
    }, []);

    const fetchUserInfo = async (uid) => {
        let userRef = doc(db, 'users', uid);
        let userInfo = await getDoc(userRef);
        userInfo = userInfo.data();
        // console.log(userInfo);
        dispatch({ type: "AUTH_USER", payload: userInfo });

    }

    const fetchAllUserInfo = async () => {

        let userRef = collection(db, 'users');
        let allUsersInfo = await getDocs(userRef);

        allUsersInfo.forEach((doc) => {
            dispatch({ type: "ALL_USERS", payload: doc.data() });
        });

    }




    return (
        <Router>
            <div>
                <Nav/>
                <Switch>


                


                    
                    {
                        state?.authUser ?
                            null : <>

                                <Route exact path="/">
                                    <SignIn />
                                </Route>
                                <Route  path="/signup">
                                    <SignUp />
                                </Route>

                            </>
                    }



{
                        state?.authUser ?
                            <>


                                <Route exact path='/' component={UserHome} />
                                <Route path='/user-tweet' component={MyTweet} />
                                <Route path='/user-profile' component={MyProfile} />
                                <Route path='/write' component={MyComponent} />

                            </> : null
                    }





                   
{/* 
                    <Route exact path='/' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/user-home' component={UserHome} />
                    <Route path='/user-tweet' component={MyTweet} />
                    <Route path='/user-profile' component={MyProfile} />
                    <Route path='/write' component={MyComponent} /> */}



                </Switch>
            </div>
        </Router>
    );
}