/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from "react-redux";
import { BtnModal, ModalFixed, ModalStyle } from ".";
import { getRepliesByUser } from "../../helper/getRepliesByUser";
import { actionDeleteComment } from "../../redux/action";
import { P } from "../coment";

const Modal = ({ comment, setShowModal }) => {
    const dispatch = useDispatch();
    const cms = useSelector(state => state.comments);

    const handleExitModal = (e) => {
        if (e.target.dataset.cancel || e.target.dataset.external) {
            setShowModal(false);
        }
    };
    const handleDelete = () => {
        if (comment.replyingTo) {
            const findCmt = cms.find(c => c.user.username === comment.replyingTo);
            if (findCmt) {
                dispatch(actionDeleteComment(comment.id, findCmt.id));
            } else {
                const findReply = getRepliesByUser(cms, comment.replyingTo);
                dispatch(actionDeleteComment(comment.id, findReply.id));
            }
            setShowModal(false);
        } else {
            dispatch(actionDeleteComment(comment.id));
        }
        setShowModal(false);
    };

    return (
        <ModalFixed data-external="external" onClick={(e) => handleExitModal(e)}>
            <ModalStyle>
                <h1>Delete Comment</h1>
                <P align="left">Are you sure you want to delete this comment? this will remove the comment and {"can't"} be undone</P>
                <div>
                    <BtnModal data-cancel="cancel">No, Cancel</BtnModal>
                    <BtnModal onClick={handleDelete} margin="1rem" color="hsl(358, 79%, 66%)">Yes, Delete</BtnModal>
                </div>
            </ModalStyle>
        </ModalFixed>
    );
};

export default Modal;
