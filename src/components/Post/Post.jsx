import Actions from "../Actions/Actions";
import styles from "./Post.module.css"

// eslint-disable-next-line react/prop-types
const Post = ({ type, data, setData }) => {

    //generates a new key and saves it into localStorage
    function generateKey() {
        const key = localStorage.getItem("id");
        const parsedId = parseInt(key) + 1;
        localStorage.setItem("id", parsedId);
        return parsedId;
    }

    return (
        <form className={styles.post}>
            <label htmlFor="comment">
                <picture className={styles.post_avatar_picture}>
                    <source 
                        // eslint-disable-next-line react/prop-types
                        srcSet={data.currentUser.image.webp}
                        type="image/webp"
                    />
                    <img 
                        // eslint-disable-next-line react/prop-types
                        src={data.currentUser.image.png} 
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
            <Actions 
                id={generateKey()}
                category={"post"}
                type={type}
                data={data}
                setData={setData}
            />
        </form>
    )
}

export default Post