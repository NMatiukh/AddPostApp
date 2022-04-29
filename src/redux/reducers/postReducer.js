import {
    CREATE_POST,
    DELETE_POST,
    EDIT_POST,
    FILTER_POSTS,
    LOADING_POSTS,
    POST_IS_EDITING
} from "../types";

const initialState = {
    allPosts: [],
    filterPosts: [],
    postIsEditing: {},
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return state
        case LOADING_POSTS:
            return {...state, allPosts: action.payload}
        case DELETE_POST:
            const postsWithDelete = (posts) => {
                return posts.filter(post => post.id !== action.payload.id)
            }
            return {
                ...state,
                allPosts: postsWithDelete(state.allPosts),
                filterPosts: postsWithDelete(state.filterPosts)
            }
        case EDIT_POST:
            let postIsEditing = {}
            const postsWithFilter = (posts) => {
                return posts.map(post => {
                    if (post.id === action.payload.id) {
                        postIsEditing = action.payload
                        return {...post, ...action.payload}

                    }
                    return post
                })
            }
            return {
                ...state,
                allPosts: postsWithFilter(state.allPosts),
                filterPosts: postsWithFilter(state.filterPosts),
                postIsEditing: postIsEditing
            }
        case FILTER_POSTS:
            return {...state, filterPosts: action.payload}
        case POST_IS_EDITING:
            return {...state, postIsEditing: action.payload}
        default:
            return state
    }
}