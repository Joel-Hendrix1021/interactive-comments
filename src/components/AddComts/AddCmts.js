import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFooterCmts, BtnSend, Form, TextArea } from ".";
import { actionAddFormCmt, actionUpdateComt } from "../../redux/action";
import { Img } from "../comentHeader";

const AddCmts = ({ comment }) => {
    const [newCmt, setNewCmt] = useState(comment || "");
    const dispatch = useDispatch();
    const user = useSelector(state => state.data.currentUser);
    const handleChange = (e) => {
        setNewCmt({
            ...newCmt,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actionUpdateComt(newCmt));
        dispatch(actionAddFormCmt());
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextArea name="content" onChange={handleChange} id="comment" defaultValue={newCmt.content} placeholder="add comment"></TextArea>
            <AddFooterCmts>
                <Img src={user.image.png} alt="" />
                <BtnSend >{comment ? "UPDATE" : "SEND"}</BtnSend>
            </AddFooterCmts>
        </Form>
    );
};

export default AddCmts;
