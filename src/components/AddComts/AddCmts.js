import { useState } from "react";
import { useSelector } from "react-redux";
import { AddFooterCmts, BtnSend, ComTextArea, TextArea } from ".";
import { Img } from "../comentHeader";

const AddCmts = () => {
    const [newCmt, setNewCmt] = useState("");
    const user = useSelector(state => state.data.currentUser);

    const handleChange = (e) => {
        setNewCmt(e.target.value);
    };

    return (
        <ComTextArea>
            <TextArea name="comment" onChange={handleChange} id="comment" defaultValue={newCmt} placeholder="add comment"></TextArea>
            <AddFooterCmts>
                <Img src={user.image.png} alt="" />
                <BtnSend >Send</BtnSend>
            </AddFooterCmts>
        </ComTextArea>
    );
};

export default AddCmts;
