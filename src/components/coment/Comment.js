import CommentHeader from "../comentHeader/CommentHeader.js";
import { CommentStyle, P } from "./index.js";

const Comment = ({ comment }) => {
    return (
        <CommentStyle>
            <CommentHeader comment={comment}/>
            <div>
                <P>{comment.content}</P>
            </div>
            <div className="commet-button">
                <button>reply</button>
            </div>
        </CommentStyle>
    );
};

export default Comment;
