/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCountMinus, actionCountPlus } from "../../redux/action.js";
import AddCmts from "../AddComts/AddCmts.js";
import CommentHeader from "../comentHeader/CommentHeader.js";
import ButtonsAction from "../buttons/ButtonsAction.js";
import Modal from "../modal/Modal.js";
import { BodyComment, BtnCount, BtnCounts, CommentStyle, P, ReplyingTo } from "./index.js";
import { Span } from "../buttons/index.js";

const Comment = ({ comment }) => {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [listCount, setListCount] = useState([]);
    const [count, setCount] = useState(0);
    const currentUser = useSelector(state => state.currentUser.username);
    const dispatch = useDispatch();
    const user = comment.user.username;

    const handleCountScore = (id, action) => {
        if (action === "plus") {
            console.log("+");
            if (!listCount.includes(currentUser)) {
                setCount(count + 1);
                setListCount([...listCount, currentUser]);
                return dispatch(actionCountPlus(id));
            }
            if (count <= 0) {
                setCount(count + 1);
                return dispatch(actionCountPlus(id));
            }
        } else if (action === "minus") {
            console.log("-");
            if (listCount.includes(currentUser)) {
                if (count >= 0) {
                    setCount(count - 1);
                    return dispatch(actionCountMinus(id));
                }
            }
            if (!listCount.includes(currentUser)) {
                if (count === 0) {
                    setCount(count - 1);
                    return dispatch(actionCountMinus(id));
                }
            }
        }
    };

    return (
        <>
            { showModal && user === currentUser && <Modal setShowModal={setShowModal} comment={comment} /> }
            <CommentStyle>
                <BtnCounts>
                    <BtnCount onClick={() => handleCountScore(comment.id, "plus")}><img src="./images/icon-plus.svg" alt="plus" /></BtnCount>
                    <Span>{comment.score}</Span>
                    <BtnCount onClick={() => handleCountScore(comment.id, "minus")}><img src="./images/icon-minus.svg" alt="minus" /></BtnCount>
                </BtnCounts>
                <BodyComment>
                    <CommentHeader comment={comment}/>
                    <P>{comment.replyingTo && <ReplyingTo>{`@${comment.replyingTo} `}</ReplyingTo>}{comment.content}</P>
                </BodyComment>
                <ButtonsAction handleCountScore={handleCountScore} setShowForm={setShowForm} comment={comment} user={user} currentUser={currentUser}/>
            </CommentStyle>
            { showForm && <AddCmts comment={user === currentUser && comment} commentId={comment.id} setShowForm={setShowForm} replyingTo={comment.replyingTo}/> }
        </>
    );
};

export default Comment;
