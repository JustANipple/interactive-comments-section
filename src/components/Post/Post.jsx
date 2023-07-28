import styles from "./Post.module.css"

// eslint-disable-next-line react/prop-types
const Post = ({ currentUser }) => {
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
                required
            ></textarea>
        </form>
    )
}

export default Post