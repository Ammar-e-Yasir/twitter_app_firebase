import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import SignUp from "../screens/signup";
import SignIn from '../screens/signin';
import { auth, onAuthStateChanged, db, doc, getDoc, collection, getDocs } from './firebase';
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
                fetchAllUserInfo();
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
                <Nav />
                <Switch>




                    {/* 
                    {
                        state.authUser ?
                            null : <>

                                <Route exact path="/">
                                    <SignUp />
                                </Route>
                                <Route path="/signin">
                                    <Signin />
                                </Route>

                            </>
                    }
 */}



                    {/* {
                        state.authUser ?
                            <>


                                <Route exact path='/' component={UserHome} />
                                <Route path='/user-tweet' component={MyTweet} />
                                <Route path='/user-profile' component={MyProfile} />
                                <Route path='/write' component={MyComponent} />

                            </> : null
                    } */}


                    <Route path='/' component={SignIn} />
                    <Route path='/register' component={SignUp} />
                    <Route exact path='/' component={UserHome} />
                    <Route path='/user-tweet' component={MyTweet} />
                    <Route path='/user-profile' component={MyProfile} />
                    <Route path='/write' component={MyComponent} />



                </Switch>
            </div>
        </Router>
    );
}