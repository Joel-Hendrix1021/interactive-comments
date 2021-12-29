import { AddFooterCmts, BtnSend, ComTextArea, TextArea } from ".";
import { Img } from "../comentHeader";

const AddCmts = ({ user }) => {
    console.log(user);
    return (
        <ComTextArea>
            <TextArea name="comment" id="comment" placeholder="add comment"></TextArea>
            <AddFooterCmts>
                <Img src={user.image.png} alt="" />
                <BtnSend >Send</BtnSend>
            </AddFooterCmts>
        </ComTextArea>
    );
};

export default AddCmts;
