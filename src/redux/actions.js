import {
    CREATE_POST,
    DELETE_POST,
    EDIT_POST,
    POST_IS_EDITING,
    FILTER_POSTS,
    HIDE_LOADER,
    LOADING_POSTS,
    SHOW_LOADER
} from "./types";
import axios from "axios";
import {message} from "antd";

export function createPost(newPost) {
    return async dispatch => {
        message.loading('Loading...', 1);
        axios
            .request({
                method: "POST",
                url: 'https://fake-server-app-nmatiukh.herokuapp.com/posts',
                data: newPost
            })
            .then(response => {
                dispatch({type: CREATE_POST, payload: response.data});
                message.success(`The "${newPost.title}" post created!`);
            })
            .catch(() => {
                message.error('This post not created!');
            })
    }
}

export function loadingPosts() {
    return async dispatch => {
        dispatch(showLoader())
        axios
            .get('https://fake-server-app-nmatiukh.herokuapp.com/posts')
            .then(response => {
                dispatch({type: LOADING_POSTS, payload: response.data});
                dispatch(hideLoader())
            })
            .catch(() => {
                dispatch(showLoader())
            })
    }
}

export function deletePost(post) {
    return async dispatch => {
        axios
            .delete(`https://fake-server-app-nmatiukh.herokuapp.com/posts/${post.id}`)
            .then(() => {
                dispatch({type: DELETE_POST, payload: post})
            })
            .catch(() => {
                message.error('This post not deleted!');
            });
    }
}

export function editPost(newPost) {
    return async dispatch => {
        message.loading('Loading...', 1);
        axios
            .request({
                method: "PUT",
                url: `https://fake-server-app-nmatiukh.herokuapp.com/posts/${newPost.id}`,
                data: newPost
            })
            .then(() => {
                dispatch({type: EDIT_POST, payload: newPost})
                message.success(`The "${newPost.title}" post edited!`);
            })
            .catch(() => {
                message.error('This post not edited!');
            })
    }
}

export function getFilterPosts(posts, value) {
    const filterPosts = posts.filter(
        post => post.title.toLowerCase().includes(value.toLowerCase())
    )
    return {
        type: FILTER_POSTS,
        payload: filterPosts
    }
}

export function setPostIsEditing(post) {
    return {
        type: POST_IS_EDITING,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

