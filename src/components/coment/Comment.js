import { useDispatch } from "react-redux";
import { actionShowModal } from "../../redux/action.js";
import CommentHeader from "../comentHeader/CommentHeader.js";
import { BtnCount, BtnCounts, ButtonReply, CommentStyle, ContainerButton, ImgReply, P, Span, ReplyingTo, BtnEdite, BtnDelete, ContainButton } from "./index.js";

const Comment = ({ comment }) => {
    const dispatch = useDispatch();

    const handleShowModal = () => {
        dispatch(actionShowModal());
    };

    return (
        <CommentStyle>
            <CommentHeader comment={comment}/>
            <div>
                <P>{comment.replyingTo && <ReplyingTo>{`@${comment.replyingTo} `}</ReplyingTo>}{comment.content}</P>
            </div>
            <ContainerButton>
                <BtnCounts>
                    <BtnCount><img src="./images/icon-plus.svg" alt="" /></BtnCount>
                    <Span>{comment.score}</Span>
                    <BtnCount><img src="./images/icon-minus.svg" alt="" /></BtnCount>
                </BtnCounts>
                {
                    comment.id !== 4
                        ? <ButtonReply><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
                        : <ContainButton>
                            <BtnDelete onClick={handleShowModal} ><img src="./images/icon-delete.svg" alt="delete" />Delete</BtnDelete>
                            <BtnEdite><img src="./images/icon-edit.svg" alt="edite" />Edite</BtnEdite>
                        </ContainButton>
                }
            </ContainerButton>
        </CommentStyle>
    );
};

export default Comment;
