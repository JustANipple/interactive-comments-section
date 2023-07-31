import styles from "./Post.module.css"
import Comment from "../Comment/Comment"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Post = ({ currentUser, type }) => {

    const [comment, setComment] = useState(
        <Comment 
            content={""}
            createdAt={"now"}
            user={currentUser}
            currentUser={currentUser}
        />
    )

    function handleClick(e) {
        e.preventDefault();
        const textContent = e.target.parentElement.querySelector("textarea").value;
        const comments = document.querySelector(".comments");
        comments.append(comment);
    }

    return (
        <form className={styles.post}>
            <label htmlFor="comment">
                <picture className={styles.post_avatar_picture}>
                    <source 
                        // eslint-disable-next-line react/prop-types
                        srcSet={currentUser.image.webp}
                        type="image/webp"
                    />
                    <img 
                        // eslint-disable-next-line react/prop-types
                        src={currentUser.image.png} 
                        alt="avatar profile image" 
                    />
                </picture>
            </label>
            <textarea 
                className={styles.post_textarea} 
                name="comment" 
                id="comment"
                placeholder="Add a comment..."
            ></textarea>
            <button 
                className={styles.post_btn}
                onClick={(e) => handleClick(e)}
            >{type}</button>
        </form>
    )
}

export default Post