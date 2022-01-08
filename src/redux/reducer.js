export default function reducer (state, action) {
    console.log(action.payload);
    switch (action.type) {
    case "ADD_COMMENT":
        return {
            ...state,
            comments: action.payload.replyId === undefined
                ? [...state.comments, action.payload.newComment]
                : state.comments.find(c => c.id === action.payload.replyId)
                    ? state.comments.map(c => c.id === action.payload.replyId ? { ...c, replies: [...c.replies, { ...action.payload.newComment, replyingTo: c.user.username }] } : c)
                    : state.comments.map(c => {
                        if (c.replies.length > 0) {
                            const ry = c.replies.find(r => r.id === action.payload.replyId);
                            if (ry) {
                                c.replies = [...c.replies, { ...action.payload.newComment, replyingTo: ry.user.username }];
                            }
                        }
                        return c;
                    })
        };

    case "UPDATE_COMMENT":
        return {
            ...state,
            comments: state.comments.find(c => c.id === action.payload.updateComment.id)
                ? state.comments.map(c => c.id === action.payload.updateComment.id ? { ...action.payload.updateComment } : c)
                : state.comments.map(c => {
                    if (c.replies.length > 0) {
                        c.replies = c.replies.map(r => r.id === action.payload.updateComment.id ? { ...action.payload.updateComment } : r);
                    }
                    return c;
                })
        };
    case "DELETE_COMMENT":
        return {
            ...state,
            comments: state.comments.find(c => c.id === action.payload.id)
                ? state.comments.filter(c => c.id !== action.payload.id)
                : state.comments.map(c => {
                    if (c.replies.length > 0) {
                        return {
                            ...c,
                            replies: c.replies.filter(r => r.id !== action.payload.id)
                        };
                    }
                    return c;
                })
        };

    case "COUNT_PLUS":
        return {
            ...state,
            comments: state.comments.find(c => c.id === action.payload.id)
                ? state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score + 1 } : c)
                : state.comments.map(c => {
                    if (c.replies.length > 0) {
                        return {
                            ...c,
                            replies: c.replies.map(r => r.id === action.payload.id ? { ...r, score: c.score + 1 } : r)
                        };
                    }
                    return c;
                })
        };

    case "COUNT_MINUS":
        return {
            ...state,
            comments: state.comments.find(c => c.id === action.payload.id)
                ? state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score - 1 } : c)
                : state.comments.map(c => {
                    if (c.replies.length > 0) {
                        return {
                            ...c,
                            replies: c.replies.map(r => r.id === action.payload.id ? { ...r, score: c.score - 1 } : r)
                        };
                    }
                    return c;
                })
        };
    default :
        return state;
    }
}
