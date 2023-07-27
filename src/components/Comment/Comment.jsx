import ActionBtn from "../ActionBtn/ActionBtn"
import Avatar from "../Avatar/Avatar"
import Vote from "../Vote/Vote"
import styles from "./Comment.module.css"

// eslint-disable-next-line react/prop-types
const Comment = () => {

    return (
        <div className={styles.container_comment}>
            <Avatar 
                name={"amyrobson"}
                createdAt={"1 month ago"}
                currentUser={{
                    username: "sam"
                }}
            />
            <p className={styles.comment_content}>
                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You&apos;ve nailed the design and the responsiveness at varoius breakpoints works really well. 
            </p>
            <Vote 
                score={12}
            />
            <div className={styles.container_action_buttons}>
                <ActionBtn type={"delete"} />
                <ActionBtn type={"reply"} />
            </div>
        </div>
    )
}

export default Comment