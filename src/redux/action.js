export const actionAddComment = (newComment) => {
    return {
        type: "ADD_COMMENT",
        payload: newComment
    };
};

export const actionDeleteComment = (id) => {
    return {
        type: "DELETE_COMMENT",
        payload: id
    };
};

export const actionUpdateComment = (comment) => {
    return {
        type: "UPDATE_COMMENT",
        payload: comment
    };
};

export const actionAddCommentReply = (comment, id) => {
    return {
        type: "ADD_COMMENT_REPLY",
        payload: {
            comment,
            repliesId: id
        }
    };
};

export const actionDeleteCmtReply = (id) => {
    return {
        type: "DELETE_COMMENT_REPLY",
        payload: id
    };
};

export const actionUpdateComtReply = (newCmt) => {
    return {
        type: "UPDATE_COMMENT_REPLY",
        payload: newCmt
    };
};
// sum score comment
export const actionScorePlus = (id) => {
    return {
        type: "ADD_SCORE_PLUS",
        payload: {
            id
        }
    };
};
// score comment
export const actionScoreMin = (id) => {
    return {
        type: "ADD_SCORE_MIN",
        payload: {
            id
        }
    };
};
// score comment reply
export const actionScoreReplyPlus = (id) => {
    return {
        type: "ADD_SCORE_REPLY_PLUS",
        payload: {
            id
        }
    };
};
// score decrement comment reply
export const actionScoreReplyMin = (id) => {
    return {
        type: "ADD_SCORE_REPLY_MIN",
        payload: {
            id
        }
    };
};
