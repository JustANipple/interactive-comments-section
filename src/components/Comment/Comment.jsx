/* eslint-disable react/prop-types */
import Actions from "../Actions/Actions"
import Avatar from "../Avatar/Avatar"
import Vote from "../Vote/Vote"
import styles from "./Comment.module.css"
import btnStyles from "../Actions/Actions.module.css"

// eslint-disable-next-line react/prop-types
const Comment = ({ id, comment, data, setData, modalState, setModalState }) => {

  //generates a new key and saves it into localStorage
  function generateKey() {
    const key = localStorage.getItem("id");
    const parsedId = parseInt(key) + 1;
    localStorage.setItem("id", parsedId);
    return parsedId;
  }

    /* Prop types disabled for the entire Reply component */
    function Reply({ id, reply }) {
        return (
            <div 
                className={`${styles.reply}`}
            >
                <Comment
                    id={id}
                    comment={reply}
                    data={data}
                    setData={setData}
                    modalState={modalState}
                    setModalState={setModalState}                    
                />
            </div>
        )
    }

    return (
        <>
            <div className={styles.container_comment}>
                <Avatar 
                    // eslint-disable-next-line react/prop-types
                    user={comment.user}
                    createdAt={comment.createdAt}
                    currentUser={data.currentUser.username}
                />
                <p className={styles.comment_content}>
                    {"replyingTo" in comment  ? <span className={styles.content_replying_to}>@{comment.replyingTo} </span> : ""}
                    {comment.content}
                </p>
                <Vote 
                    score={comment.score}
                />
                <div className={btnStyles.container_action_buttons}>
                    {data.currentUser.username === comment.user.username ?
                        <Actions 
                            id={localStorage.getItem("id")}
                            category={"act"}
                            type={"delete"}
                            data={data}
                            setData={setData}
                            modalState={modalState}
                            setModalState={setModalState}
                        />
                    : ""}
                    <Actions 
                        id={localStorage.getItem("id")}
                        category={"act"}
                        type={"reply"}
                        modalState={modalState}
                        setModalState={setModalState}
                    />
                </div>

            </div>
            {/* eslint-disable-next-line react/jsx-key */}
            {comment.replies && comment.replies.length > 0 ? 
                comment.replies.map((reply) => {
                    return (
                        <Reply 
                            key={generateKey()} 
                            id={id}
                            reply={reply}
                        />
                    )
                })
            : ""}
        </>
    )
}

export default Comment