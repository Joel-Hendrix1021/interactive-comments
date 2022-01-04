import { useDispatch } from "react-redux";
import { BtnModal, ModalFixed, ModalStyle } from ".";
import { actionDeleteCmtReply, actionDeleteComment } from "../../redux/action";
import { P } from "../coment";

const Modal = ({ comment, setShowModal }) => {
    const dispatch = useDispatch();
    console.log(comment);

    const handleExitModal = (e) => {
        if (e.target.dataset.cancel || e.target.dataset.external) {
            setShowModal(false);
        }
    };
    const handleDelete = () => {
        if (comment.replyingTo) {
            dispatch(actionDeleteCmtReply(comment.id));
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
