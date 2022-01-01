import { BtnModal, ModalFixed, ModalStyle } from ".";

const Modal = () => {
    return (
        <ModalFixed>
            <ModalStyle>
                <h1>Delete Comment</h1>
                <p>Are you sure you want to delete this comment? this will remove the comment and {"can't"} be undone</p>
                <div>
                    <BtnModal>No, Cancel</BtnModal>
                    <BtnModal color="hsl(358, 79%, 66%)">Yes, Delete</BtnModal>
                </div>
            </ModalStyle>
        </ModalFixed>
    );
};

export default Modal;
