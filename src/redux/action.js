export const actionAddComment = (newComment, replyId) => {
    return {
        type: "ADD_COMMENT",
        payload: {
            newComment,
            replyId
        }
    };
};

export const actionDeleteComment = (id) => {
    return {
        type: "DELETE_COMMENT",
        payload: {
            id
        }
    };
};

export const actionUpdateComment = (comment) => {
    return {
        type: "UPDATE_COMMENT",
        payload: {
            updateComment: comment
        }
    };
};

export const actionCountPlus = (id) => {
    return {
        type: "COUNT_PLUS",
        payload: {
            id
        }
    };
};

export const actionCountMinus = (id) => {
    return {
        type: "COUNT_MINUS",
        payload: {
            id
        }
    };
};
