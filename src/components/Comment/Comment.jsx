/* eslint-disable react/prop-types */
import Actions from "../Actions/Actions"
import Avatar from "../Avatar/Avatar"
import Vote from "../Vote/Vote"
import styles from "./Comment.module.css"
import btnStyles from "../Actions/Actions.module.css"

// eslint-disable-next-line react/prop-types
const Comment = ({ 
                commentKey, content, createdAt, score=0, user, replies=[],
                currentUser, 
                replyingTo=""
            }) => {

    /* Prop types disabled for the entire Reply component */
    function Reply({ commentKey, reply, index }) {
        return (
            <div 
                key={commentKey} 
                className={`${styles.reply} ${index === replies.length - 1 ? styles.last : ""}`}
            >
                <Comment 
                    /* json data */
                    currentUser={currentUser}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    user={reply.user}
                    replies={reply.replies}
                    replyingTo={reply.replyingTo}
                />
            </div>
        )
    }

    return (
        <>
            <div key={commentKey} className={styles.container_comment}>
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
                <div className={btnStyles.container_action_buttons}>
                    {currentUser === user.username ?
                        <Actions 
                            category={"act"}
                            type={"delete"}
                        />
                    : ""}
                    <Actions 
                        category={"act"}
                        type={"reply"}
                    />
                </div>

            </div>
            {/* eslint-disable-next-line react/jsx-key */}
            {replies.length > 0 ? replies.map((reply, index) => <Reply key={reply.id} reply={reply} index={index}/>) : ""}
        </>
    )
}

export default Comment