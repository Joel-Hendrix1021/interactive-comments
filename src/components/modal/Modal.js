import { useDispatch, useSelector } from "react-redux";
import { BtnModal, ModalFixed, ModalStyle } from ".";
import { actionDeleteCmt, actionShowModal } from "../../redux/action";
import { P } from "../coment";

const Modal = ({ id }) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.data);
    console.log(data);

    const handleExitModal = (e) => {
        if (e.target.dataset.cancel) {
            dispatch(actionShowModal());
        } else if (e.target.dataset.external) {
            dispatch(actionShowModal());
        }
    };
    const handleDelete = () => {
        dispatch(actionDeleteCmt(id));
        dispatch(actionShowModal());
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
