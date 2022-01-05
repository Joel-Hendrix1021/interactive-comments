export const actionAddComment = (newComment, id) => {
    return {
        type: "ADD_COMMENT",
        payload: {
            newComment,
            id
        }
    };
};

export const actionDeleteComment = (comentId, repliesId) => {
    return {
        type: "DELETE_COMMENT",
        payload: {
            comentId,
            repliesId
        }
    };
};

export const actionUpdateComment = (comment, id) => {
    return {
        type: "UPDATE_COMMENT",
        payload: {
            updateComent: comment,
            repliesId: id
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
