import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import App from "./App";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import SearchPosts from "./components/SearchPosts";
import NotFound from "./components/NotFound";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="posts" element={<Posts/>}/>
                    <Route path="addPost" element={<AddPost/>}/>
                    <Route path="searchPosts" element={<SearchPosts/>}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
