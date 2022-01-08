/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from "react-redux";
import { BtnAction, ButtonReply, ContainButton, ImgReply } from ".";
import { getRepliesByUser } from "../../helper/getRepliesByUser";
import { actionDeleteComment } from "../../redux/action";
import { soft_red } from "../color";

const ButtonsAction = ({ setShowForm, user, currentUser, comment }) => {
    const dispatch = useDispatch();
    const cms = useSelector(state => state.comments);

    const handleClick = () => {
        dispatch(actionDeleteComment(comment.id));
        // const findCmt = cms.find(cmt => cmt.id === comment.id);
        // if (findCmt) return dispatch(actionDeleteComment(comment.id));
        // // find comment by replyingTo
        // const cmtRply = getRepliesByUser(cms, comment.replyingTo);
        // dispatch(actionDeleteComment(comment.id));
    };
    return (
        <ContainButton >
            {
                user !== currentUser
                    ? <ButtonReply onClick={() => setShowForm(f => !f)}><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
                    : (
                        <>
                            <BtnAction color={soft_red} onClick={handleClick} ><img src="./images/icon-delete.svg" alt="delete" />Delete</BtnAction>
                            <BtnAction onClick={() => setShowForm(f => !f)}><img src="./images/icon-edit.svg" alt="edite" />Edite</BtnAction>
                        </>
                    )
            }
        </ContainButton>

    );
};

export default ButtonsAction;
