/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFooterCmts, BtnSend, Form, TextArea } from ".";
import { getRepliesByUser } from "../../helper/getRepliesByUser";
import { actionAddComment, actionUpdateComment } from "../../redux/action";

import { Img } from "../comentHeader";

const initialState = {
    content: "",
    score: 0,
    user: null
};

const AddCmts = ({ comment, commentId, setShowForm }) => {
    const [newCmt, setNewCmt] = useState(comment || "");
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const cm = useSelector(state => state.comments);
    const handleChange = (e) => {
        setNewCmt({ ...newCmt, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCmt.content.trim() === "") return alert("Please enter your comment");
        if (!newCmt.id) {
            if (commentId) {
                const newComment = { ...newCmt, user, createAt: Date.now(), id: Date.now() };
                setShowForm(false);
                return dispatch(actionAddComment(newComment, commentId));
            } else {
                const newComment = { ...newCmt, user, createAt: Date.now(), replies: [], id: Date.now() };
                dispatch(actionAddComment(newComment));
            }
        }
        if (newCmt.id) {
            const newComment = { ...newCmt, user, createAt: Date.now() };
            setShowForm(false);
            dispatch(actionUpdateComment(newComment));
        }
        setNewCmt(initialState);
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
