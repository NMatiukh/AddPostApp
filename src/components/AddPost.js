import {Row, Button, Form, Input} from "antd";
import Title from "antd/es/typography/Title";
import {useDispatch} from "react-redux";
import {createPost} from "../redux/actions";

const AddPost = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(createPost(values));
        form.resetFields();
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <>
            <Row justify={"center"}>
                <Title>Add post</Title>
            </Row>
            <Form
                form={form}
                name="addPost"
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
                            Reset
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddPost;