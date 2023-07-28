import Actions from "../Actions/Actions"
import Avatar from "../Avatar/Avatar"
import Vote from "../Vote/Vote"
import styles from "./Comment.module.css"

// eslint-disable-next-line react/prop-types
const Comment = ({ id, content, createdAt, score, user, replies=[] , currentUser, replyingTo=""}) => {

    return (
        <>
            <div key={id} className={styles.container_comment}>
                <Avatar 
                    // eslint-disable-next-line react/prop-types
                    user={user}
                    createdAt={createdAt}
                    currentUser={currentUser}
                />
                <p className={styles.comment_content}>
                    {replyingTo !== "" ? <span className={styles.content_replying_to}>@{replyingTo} </span> : ""}
                    {content}
                </p>
                <Vote 
                    score={score}
                />
                <Actions 
                    // eslint-disable-next-line react/prop-types
                    types={currentUser === user.username ? ["delete", "edit"] : ["reply"]}
                />
            </div>

            {replies.length > 0 ? 
                replies.map((reply, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`${styles.reply} ${index === replies.length - 1 ? styles.last : ""}`}
                        > 
                            <div className={styles.reply_line}></div>
                            <Comment 
                                /* json data */
                                currentUser={currentUser}
                                key={reply.id}
                                content={reply.content}
                                createdAt={reply.createdAt}
                                score={reply.score}
                                user={reply.user}
                                replies={reply.replies}
                                replyingTo={reply.replyingTo}
                            />
                        </div>
                    )
                })
                : 
                "" 
            }
        </>
    )
}

export default Comment