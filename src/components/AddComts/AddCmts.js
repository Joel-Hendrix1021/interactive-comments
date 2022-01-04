import { useState } from "react";
import { useSelector } from "react-redux";
import { AddFooterCmts, BtnSend, Form, TextArea } from ".";

import { Img } from "../comentHeader";

const initialState = {
    content: "",
    score: 0,
    user: null
};

const AddCmts = ({ comment, setShowForm, replyingTo, commentId }) => {
    const [newCmt, setNewCmt] = useState(comment || initialState);

    const user = useSelector(state => state.currentUser);
    const handleChange = (e) => {
        setNewCmt({ ...newCmt, [e.target.name]: e.target.value });
    };
    console.log(comment);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextArea name="content" onChange={handleChange} value={newCmt.content} id="comment" placeholder="add comment"></TextArea>
            <AddFooterCmts>
                <Img src={user.image.png} alt="user" />
                <BtnSend >{comment ? "UPDATE" : "SEND"}</BtnSend>
            </AddFooterCmts>
        </Form>
    );
};

export default AddCmts;
