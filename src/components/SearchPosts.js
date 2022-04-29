import Search from "antd/es/input/Search";
import {useDispatch, useSelector} from "react-redux";
import {getFilterPosts, loadingPosts} from "../redux/actions";
import {useEffect, useState} from "react";
import {Col, Empty, Row} from "antd";
import Title from "antd/es/typography/Title";
import ListOfPosts from "./ListOfPosts";

const SearchPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allPosts);
    const load = useSelector(state => state.load.load);
    const filterPosts = useSelector(state => state.posts.filterPosts)
    const [buttonSearchCheck, setButtonSearchCheck] = useState(false)

    const onSearch = value => {
        if (!load) {
            dispatch(getFilterPosts(posts, value))
            if (filterPosts.length === 0) {
                setButtonSearchCheck(true)
            }
        }
    };
    useEffect(() => {
        dispatch(loadingPosts())
    }, [dispatch])
    return (
        <>
            <Row
                justify={"center"}
            >
                <Title>Search posts</Title>
            </Row>
            <Row
                justify={"center"}
                style={{marginBottom: '2%'}}
            >
                <Col
                    span={8}
                >
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Col>
            </Row>

            {
                filterPosts.length !== 0 ?
                    <ListOfPosts posts={filterPosts}/> :
                    <Row
                        justify={"center"}
                    >
                        {
                            buttonSearchCheck ?
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> :
                                ''
                        }
                    </Row>
            }
        </>
    )
}

export default SearchPosts;