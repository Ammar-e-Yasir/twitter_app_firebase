export let data = {
    authUser: null,
    allTweets: [],
    mytweets : []

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
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

        default:
            return state;

    }
}