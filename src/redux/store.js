import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./reducers/postReducer";
import {loaderReducer} from "./reducers/loaderReducer";

export default configureStore({
    reducer: {
        posts: postReducer,
        load: loaderReducer
    }
});