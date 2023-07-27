import Actions from "../Actions/Actions"
import Avatar from "../Avatar/Avatar"
import Vote from "../Vote/Vote"
import styles from "./Comment.module.css"

// eslint-disable-next-line react/prop-types
const Comment = ({ id, content, createdAt, score, user, replies, currentUser}) => {
    return (
        <>
            <div className={styles.container_comment} key={id}>
                <Avatar 
                    // eslint-disable-next-line react/prop-types
                    user={user}
                    createdAt={createdAt}
                    currentUser={currentUser}
                />
                <p className={styles.comment_content}>{content}</p>
                <Vote 
                    score={score}
                />
                <Actions 
                    // eslint-disable-next-line react/prop-types
                    types={currentUser === user.username ? ["delete", "edit"] : ["reply"]}
                />
            </div>
        </>
    )
}

export default Comment