import Actions from "../Actions/Actions";
import styles from "./Post.module.css"

// eslint-disable-next-line react/prop-types
const Post = ({ currentUser, type, data, setData }) => {

    function handleClick(e) {
        e.preventDefault();
        const textContent = e.target.parentElement.parentElement.querySelector("textarea").value;
        if(textContent !== "") {
            //Clone comments array
            // eslint-disable-next-line react/prop-types
            const updatedComments = [...data.comments];
            //Push new comment into the cloned array
            updatedComments.push(
                {
                    // eslint-disable-next-line react/prop-types
                    "id": data.comments.length + 1,
                    "content": textContent,
                    "createdAt": "now",
                    "score": 0,
                    "user": {
                    "image": { 
                        // eslint-disable-next-line react/prop-types
                        "png": currentUser.image.png,
                        // eslint-disable-next-line react/prop-types
                        "webp": currentUser.image.webp
                    },
                    // eslint-disable-next-line react/prop-types
                    "username": currentUser.username
                    },
                    "replies": []
                }
            )
            const newData = {...data, comments: updatedComments};
            //Set the state with updated array
            setData(newData);
            //Save new state in localStorage
            localStorage.setItem("data", JSON.stringify(newData));
            }
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