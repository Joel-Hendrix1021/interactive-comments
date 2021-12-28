import { HeaderComts, Img, TextUser, Time } from "./index";

const CommentHeader = ({ comment }) => {
    return (
        <HeaderComts>
            <Img src={comment.user.image.png} alt={comment.user.username} />
            <TextUser>{comment.user.username}</TextUser>
            <Time>{comment.createdAt}</Time>
        </HeaderComts>
    );
};

export default CommentHeader;
