import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import Signup from '../screens/signup';
import Signin from '../screens/signin';
import { auth, onAuthStateChanged, db, doc, getDoc } from './firebase';
import UserHome from "../screens/user-home";
import MyTweet from "../screens/my-tweet";
import MyProfile from "../screens/my-profile";
import MyComponent from "../screens/my-component";
export default function App() {
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid);
            }
            else {
                console.log('user not found');
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

    return (
        <Router>
            <div>
                <Nav />
                <Switch>





                    {
                        state.authUser ?
                            null : <>
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/signin">
                                    <Signin />
                                </Route>

                            </>
                    }




                    {
                        state.authUser ?
                            <>


                                <Route path='/user-home' component={UserHome} />
                                <Route path='/user-tweet' component={MyTweet} />
                                <Route path='/user-profile' component={MyProfile} />
                                <Route exact path='/write' component={MyComponent} />

                            </> : null
                    }







                </Switch>
            </div>
        </Router>
    );
}