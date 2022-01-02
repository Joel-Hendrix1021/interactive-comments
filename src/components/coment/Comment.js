import { useDispatch, useSelector } from "react-redux";
import { actionAddFormCmt, actionShowModal } from "../../redux/action.js";
import AddCmts from "../AddComts/AddCmts.js";
import CommentHeader from "../comentHeader/CommentHeader.js";
import Modal from "../modal/Modal.js";
import { BtnCount, BtnCounts, ButtonReply, CommentStyle, ContainerButton, ImgReply, P, Span, ReplyingTo, BtnEdite, BtnDelete, ContainButton } from "./index.js";

const Comment = ({ comment }) => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.showModal);
    const showAddCmts = useSelector(state => state.showAddCmts);

    const handleShowModal = () => {
        dispatch(actionShowModal());
    };
    const handleEdit = () => {
        console.log("edite");
        dispatch(actionAddFormCmt());
    };

    return (
        <>
            {showAddCmts && comment.id === 4
                ? <AddCmts comment={comment}/>
                : (<CommentStyle>
                    { showModal && comment.id === 4 && <Modal id={comment.id} /> }
                    <CommentHeader comment={comment}/>
                    <div>
                        <P>{comment.replyingTo && <ReplyingTo>{`@${comment.replyingTo} `}</ReplyingTo>}{comment.content}</P>
                    </div>
                    <ContainerButton>
                        <BtnCounts>
                            <BtnCount><img src="./images/icon-plus.svg" alt="plus" /></BtnCount>
                            <Span>{comment.score}</Span>
                            <BtnCount><img src="./images/icon-minus.svg" alt="minus" /></BtnCount>
                        </BtnCounts>
                        {
                            comment.id !== 4
                                ? <ButtonReply><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
                                : <ContainButton>
                                    <BtnDelete onClick={handleShowModal} ><img src="./images/icon-delete.svg" alt="delete" />Delete</BtnDelete>
                                    <BtnEdite onClick={handleEdit}><img src="./images/icon-edit.svg" alt="edite" />Edite</BtnEdite>
                                </ContainButton>
                        }
                    </ContainerButton>
                </CommentStyle>
                )
            }

        </>
    );
};

export default Comment;
