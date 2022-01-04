import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionScoreMin, actionScorePlus, actionScoreReplyMin } from "../../redux/action.js";
import AddCmts from "../AddComts/AddCmts.js";
import CommentHeader from "../comentHeader/CommentHeader.js";
import Modal from "../modal/Modal.js";
import { BtnCount, BtnCounts, ButtonReply, CommentStyle, ContainerButton, ImgReply, P, Span, ReplyingTo, BtnEdite, BtnDelete, ContainButton } from "./index.js";

const Comment = ({ comment }) => {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const currentUser = useSelector(state => state.currentUser.username);
    const user = comment.user.username;
    const dispatch = useDispatch();

    const handleSum = (comment) => {
        if (comment.replyingTo) {
            dispatch(actionScorePlus(comment.id));
        } else {
            dispatch(actionScorePlus(comment.id));
        }
    };

    const handleRes = () => {
        if (comment.replyingTo) {
            dispatch(actionScoreReplyMin(comment.id));
        } else {
            dispatch(actionScoreMin(comment.id));
        }
    };

    return (
        <>
            <CommentStyle>
                { showModal && user === currentUser && <Modal setShowModal={setShowModal} comment={comment} /> }
                <CommentHeader comment={comment}/>
                <div>
                    <P>{comment.replyingTo && <ReplyingTo>{`@${comment.replyingTo} `}</ReplyingTo>}{comment.content}</P>
                </div>
                <ContainerButton>
                    <BtnCounts>
                        <BtnCount onClick={() => handleSum(comment)}><img src="./images/icon-plus.svg" alt="plus" /></BtnCount>
                        <Span>{comment.score}</Span>
                        <BtnCount onClick={() => handleRes(comment)}><img src="./images/icon-minus.svg" alt="minus" /></BtnCount>
                    </BtnCounts>
                    {
                        user !== currentUser
                            ? <ButtonReply onClick={() => setShowForm(!showForm)}><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
                            : <ContainButton>
                                <BtnDelete onClick={() => setShowModal(!showModal)} ><img src="./images/icon-delete.svg" alt="delete" />Delete</BtnDelete>
                                <BtnEdite onClick={() => setShowForm(!showForm)}><img src="./images/icon-edit.svg" alt="edite" />Edite</BtnEdite>
                            </ContainButton>
                    }
                </ContainerButton>
            </CommentStyle>
            { showForm && <AddCmts /> }
        </>
    );
};

export default Comment;
