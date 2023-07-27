import styles from "./Avatar.module.css"

// eslint-disable-next-line react/prop-types
const Avatar = ({ name, createdAt, currentUser }) => {

    function buildPngUrl(name) {
        return `./images/avatars/image-${name}.png`
    }

    function buildWebpUrl(name) {
        return `./images/avatars/image-${name}.webp`
    }

    return (
        <div className={styles.container_avatar}>
            <picture className={styles.avatar_picture}>
                <source 
                    srcSet={buildWebpUrl(name)}
                    type="image/webp"
                />
                <img 
                    src={buildPngUrl(name)} 
                    alt="avatar profile image" 
                />
            </picture>
            <p className={styles.avatar_name}>{name}</p>
            {/*eslint-disable-next-line react/prop-types*/}
            {currentUser.username === name ? 
                <p className={styles.avatar_current_user}>you</p>
                :
                ""
            }
            <p className={styles.avatar_created_at}>{createdAt}</p>
        </div>
    )
}

export default Avatar