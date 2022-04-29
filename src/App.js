import {
    Outlet,
    Link,
    useNavigate,
} from "react-router-dom";
import {
    Layout,
    Menu
} from "antd";
import {
    Content,
    Footer,
    Header
} from "antd/lib/layout/layout";
import {useEffect} from "react";

export default function App() {
    let navigate = useNavigate();
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate(`/posts`)
        }
    })
    return (
        <Layout style={{minHeight: 1000}}>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['posts']}
                >
                    <Menu.Item key="posts">
                        <Link to={`/posts`}>All posts</Link>
                    </Menu.Item>
                    <Menu.Item key="addPost">
                        <Link to={`/addPost`}>Add post</Link>
                    </Menu.Item>
                    <Menu.Item key="searchPosts">
                        <Link to={`/searchPosts`}>Search posts</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '2% 10%', margin: '3% 0', backgroundColor: "#fff"}}>
                <Outlet/>
            </Content>
            <Footer style={{textAlign: "center"}}>Add Post App ©2022 Created by Nazarii Matiukh</Footer>
        </Layout>
    );
}
