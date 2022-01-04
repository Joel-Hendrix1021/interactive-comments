export default function reducer (state, action) {
    console.log(action.payload);
    switch (action.type) {
    case "ADD_COMMENT":
        return {
            ...state,
            comments: [...state.comments, action.payload]
        };
    case "DELETE_COMMENT":
        return {
            ...state,
            comments: state.comments.filter(comment => comment.id !== action.payload)
        };
    case "ADD_COMMENT_REPLY":
        return {
            ...state,
            comments: state.comments.map(c => {
                if (c.id === action.payload.repliesId) {
                    return {
                        ...c,
                        replies: [...c.replies, { ...action.payload.comment }]
                    };
                } else {
                    return {
                        ...c,
                        replies: c.replies.map(r => {
                            if (r.id === action.payload.repliesId) {
                                return {
                                    ...r,
                                    replies: [...r.replies, { ...action.payload.comment }]
                                };
                            } else {
                                return r;
                            }
                        })
                    };
                }
            })
        };
    case "UPDATE_COMMENT_REPLY":
        return {
            ...state,
            comments: state.comments.map(c => {
                if (c.replies.length > 0) {
                    return {
                        ...c,
                        replies: c.replies.map(r => r.id === 4 ? action.payload : r)
                    };
                } else {
                    return c;
                }
            })
        };

    case "DELETE_COMMENT_REPLY":
        return {
            ...state,
            comments: state.comments.map(c => {
                if (c.replies.length > 0) {
                    return {
                        ...c,
                        replies: c.replies.filter(r => r.id !== action.payload)
                    };
                }
                return c;
            })
        };
    case "ADD_SCORE_PLUS":
        return {
            ...state,
            comments: state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score + 1 } : c)
        };
    case "ADD_SCORE_REPLY_PLUS":
        return {
            ...state,
            comments: state.comments.map(c => {
                if (c.replies.length > 0) {
                    return {
                        ...c,
                        replies: c.replies.map(r => r.id === action.payload.id ? { ...r, score: r.score + 1 } : r)
                    };
                }
                return c;
            })
        };
    case "ADD_SCORE_MIN":
        return {
            ...state,
            comments: state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score - 1 } : c)
        };
    case "ADD_SCORE_REPLY_MIN":
        return {
            ...state,
            comments: state.comments.map(c => {
                if (c.replies.length > 0) {
                    return {
                        ...c,
                        replies: c.replies.map(r => r.id === action.payload.id ? { ...r, score: r.score - 1 } : r)
                    };
                }
                return c;
            })
        };

    default :
        return state;
    }
}
