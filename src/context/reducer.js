export let data = {
    authUser: null,
    allUsers : [],
    allTweets: [],
    mytweets : [],
    likeTweets : [],
    unlieTweets :[]


}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }
        case "ALL_USERS" : {
            let allUsersClone = state.allUsers.slice(0);
            allUsersClone.push(action.payload)
            // console.log(allUsersClone)
            return {
                ...state,
                allUsers:allUsersClone
            }
        }

        case "ALL_TWEETS": {
            let allTweetsClone = state.allTweets.slice(0);
            allTweetsClone.push(action.payload)
            // console.log(allTweetsClone)  


            return {
                ...state,
                allTweets : allTweetsClone
            }
        }



        case "MY_TWEETS": {
            let myTweetsClone = state.mytweets.slice(0);
            myTweetsClone.push(action.payload)
            // console.log(myTweetsClone)

            return {
                ...state,
                mytweets: myTweetsClone
            }
        }

        case "LIKE_DATA" : {
            let likeTweetsClone = state.likeTweets.slice(0);
            likeTweetsClone.push(action.payload);
            console.log(likeTweetsClone)

            
            return {
                ...state,
                likeTweets : likeTweetsClone

            }
        }

        default:
            return state;

    }
}