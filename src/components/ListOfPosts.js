import {useState} from "react";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {Button, List, Modal, Row} from "antd";
import Title from "antd/es/typography/Title";
import EditPost from "./EditPost";
import {useDispatch} from "react-redux";
import {deletePost, setPostIsEditing} from "../redux/actions";

const {confirm} = Modal;


const ListOfPosts = ({posts}) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (item) => {
        dispatch(setPostIsEditing(item))
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function showPromiseConfirm(item) {
        confirm({
            title: `Do you want to delete this item?`,
            content: `${item.title}`,
            icon: <ExclamationCircleOutlined/>,
            okType: 'danger',
            okText: 'Yes',
            onOk() {
                dispatch(deletePost(item))
            },
            onCancel() {
            },
        });
    }

    return (
        <>
            <List
                bordered
                itemLayout="horizontal"
                size="large"
                pagination={{
                    pageSize: 6,
                }}
                dataSource={posts}
                renderItem={item => (
                    <List.Item
                        actions={
                            [
                                <Button
                                    shape={"round"}
                                    type={"default"}
                                    onClick={() => showModal(item)}
                                >
                                    Edit
                                </Button>,
                                <Button
                                    shape={"round"}
                                    onClick={() => showPromiseConfirm(item)}
                                    danger
                                    type={"default"}
                                >
                                    Delete
                                </Button>
                            ]
                        }
                        key={item.title}
                    >
                        <List.Item.Meta
                            title={item.title}
                        />
                        {item.description}
                    </List.Item>
                )}
            />
            <Modal
                style={{top: -100}}
                title=
                    {
                        <Row justify={"center"}>
                            <Title>Edit Post</Title>
                        </Row>
                    }
                visible={isModalVisible}
                onOk={handleOk}
                centered
                width={1000}
                footer={null}
                onCancel={handleCancel}
            >
                <EditPost/>
            </Modal>
        </>
    )
}

export default ListOfPosts;