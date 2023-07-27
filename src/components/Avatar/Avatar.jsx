import styles from "./Avatar.module.css"

// eslint-disable-next-line react/prop-types
const Avatar = ({ user, createdAt, currentUser }) => {
    return (
        <div className={styles.container_avatar}>
            <picture className={styles.avatar_picture}>
                <source 
                    // eslint-disable-next-line react/prop-types
                    srcSet={user.image.webp}
                    type="image/webp"
                />
                <img 
                    // eslint-disable-next-line react/prop-types
                    src={user.image.png} 
                    alt="avatar profile image" 
                />
            </picture>
            {/* eslint-disable-next-line react/prop-types */}
            <p className={styles.avatar_name}>{user.username}</p>
            {/*eslint-disable-next-line react/prop-types*/}
            {currentUser === user.username ? 
                <p className={styles.avatar_current_user}>you</p>
                :
                ""
            }
            <p className={styles.avatar_created_at}>{createdAt}</p>
        </div>
    )
}

export default Avatar