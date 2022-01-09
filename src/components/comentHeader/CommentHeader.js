/* eslint-disable no-unused-vars */
import { HeaderComts, Img, SpanYou, TextUser, Time } from "./index";
import TimeAgo from "react-timeago";

const CommentHeader = ({ comment }) => {
    const user = comment.user.username;
    return (
        <HeaderComts>
            <Img src={comment.user.image.webp} alt={comment.user.username} />
            <TextUser>{comment.user.username}</TextUser>
            {user === "juliusomo" && <SpanYou>you</SpanYou>}
            <Time>{typeof comment.createdAt === "number" ? <TimeAgo date={comment.createdAt}/> : comment.createdAt}</Time>
        </HeaderComts>
    );
};

export default CommentHeader;
