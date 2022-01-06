/* eslint-disable camelcase */
import { BtnAction, ButtonReply, ContainButton, ImgReply } from ".";
import { soft_red } from "../color";

const ButtonsAction = ({ setShowForm, user, currentUser }) => {
    return (
        <ContainButton>
            {
                user !== currentUser
                    ? <ButtonReply onClick={() => setShowForm(f => !f)}><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
                    : (
                        <>
                            <BtnAction color={soft_red} onClick={() => setShowForm(f => !f)} ><img src="./images/icon-delete.svg" alt="delete" />Delete</BtnAction>
                            <BtnAction onClick={() => setShowForm(f => !f)}><img src="./images/icon-edit.svg" alt="edite" />Edite</BtnAction>
                        </>
                    )
            }
        </ContainButton>

    );
};

export default ButtonsAction;
