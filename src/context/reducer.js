export let data = {
    authUser: null,
    tweets: [],
    mytweets: []

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

        case "TWEETS": {

            return {
                ...state,
                tweets: action.payload
            }
        }

        case "MY_TWEETS": {
            // console.log(state.mytweets)

            return {
                ...state,
                mytweets: action.payload
            }
        }

        default:
            return state;

    }
}