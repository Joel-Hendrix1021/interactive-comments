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

const AddCmts = ({ comment, commentId, setShowForm, replyingTo }) => {
    const [newCmt, setNewCmt] = useState(comment || initialState);
    const dispatch = useDispatch();

    const user = useSelector(state => state.currentUser);
    const cm = useSelector(state => state.comments);
    const handleChange = (e) => {
        setNewCmt({ ...newCmt, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCmt.id) {
            // update comment here
            const findCmt = cm.find(c => c.id === comment.id);
            if (findCmt) {
                dispatch(actionUpdateComment(newCmt));
            } else {
                const findReply = getRepliesByUser(cm, comment.replyingTo);
                dispatch(actionUpdateComment(newCmt, findReply.id));
            }
            setShowForm(false);
            return;
        }

        if (commentId) { /// comment by comment
            const findCmt = cm.find(item => item.id === commentId);
            if (findCmt) {
                const newComment = { ...newCmt, id: Date.now(), user, createAt: Date.now(), replyingTo: findCmt.user.username };
                dispatch(actionAddComment(newComment, commentId));
            } else { // name of comment initial a reply
                const findCmt = getRepliesByUser(cm, replyingTo);
                // find comment by replyingTo
                const findReply = findCmt.replies.find(c => c.replyingTo === replyingTo);
                const newComment = { ...newCmt, id: Date.now(), user, createAt: Date.now(), replyingTo: findReply.user.username };
                dispatch(actionAddComment(newComment, findCmt.id));
            }
            setShowForm(false);
        } if (commentId === undefined) { /// add new comment post
            const newComment = { ...newCmt, id: Date.now(), user, createAt: Date.now(), replies: [] };
            dispatch(actionAddComment(newComment));
            setNewCmt(initialState);
        }
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
