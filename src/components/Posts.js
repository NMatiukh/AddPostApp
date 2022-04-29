import {Empty, Row, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadingPosts} from "../redux/actions";
import Title from "antd/es/typography/Title";
import ListOfPosts from "./ListOfPosts";


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allPosts);
    const load = useSelector(state => state.load.load);

    useEffect(() => {
        dispatch(loadingPosts())
    }, [dispatch])

    return (
        <>
            <Row justify={"center"}>
                <Title>All posts</Title>
            </Row>
            {
                posts.length === 0 ?
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                            height: 60,
                        }}
                        description={
                            <span>
                                The posts not found
                            </span>
                        }
                    >
                    </Empty> :
                    <div>
                        {
                            load ?
                                <Row justify={"center"}>
                                    <Spin/>
                                </Row> :
                                <ListOfPosts posts={posts}/>
                        }
                    </div>
            }
        </>
    )
}

export default Posts;