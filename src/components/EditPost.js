import {Button, Form, Input, Row} from "antd";
import {editPost} from "../redux/actions";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const EditPost = () => {
    const postIsEditing = useSelector(state => state.posts.postIsEditing);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(editPost({...postIsEditing, ...values}))
    };
    const onReset = () => {
        form.resetFields();
    };
    useEffect(() => {
        onReset();
    })

    return (
        <>
            <Form
                form={form}
                initialValues={postIsEditing}
                name="editPost"
                onFinish={onFinish}
                labelCol={{span: 8}}
                wrapperCol={{span: 8}}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 8}}>
                    <Row justify={"space-around"}>
                        <Button shape={"round"} type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button shape={"round"} htmlType="button" onClick={onReset}>
                            Reset back
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}

export default EditPost;