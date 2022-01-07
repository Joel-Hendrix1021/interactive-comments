/* eslint-disable no-unused-vars */
import { LineThread, Spanx, Thread } from ".";
import Comment from "../coment/Comment";

const CardComent = ({ comment }) => {
    return (
        <>
            <Comment comment={comment}/>
            {
                comment.replies.length > 0 && (
                    <Thread>
                        <LineThread></LineThread>
                        <div className="content-thread">
                            {
                                comment.replies.map(item => {
                                    return (
                                        <Comment key={item.id} comment={item} />
                                    );
                                })
                            }
                        </div>
                    </Thread>
                )
            }
        </>
    );
};

export default CardComent;

//
