import CommentHeader from "../comentHeader/CommentHeader.js";
import { BtnCount, BtnCounts, ButtonReply, CommentStyle, ContainerButton, ImgReply, P, Span } from "./index.js";

const Comment = ({ comment }) => {
    return (
        <CommentStyle>
            <CommentHeader comment={comment}/>
            <div>
                <P>{comment.content}</P>
            </div>
            <ContainerButton>
                <BtnCounts>
                    <BtnCount><img src="./images/icon-plus.svg" alt="" /></BtnCount>
                    <Span>{comment.score}</Span>
                    <BtnCount><img src="./images/icon-minus.svg" alt="" /></BtnCount>
                </BtnCounts>
                <ButtonReply><ImgReply src="./images/icon-reply.svg"/>reply</ButtonReply>
            </ContainerButton>
        </CommentStyle>
    );
};

export default Comment;
