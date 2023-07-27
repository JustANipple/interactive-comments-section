import styles from "./ActionBtn.module.css"

// eslint-disable-next-line react/prop-types
const ActionBtn = ({ type }) => {

    function buildUrl(type) {
        return `images/icon-${type}.svg`;
    }   

    return (
        <button className={styles.action_button}>
            <img 
                src={buildUrl(type)}
                alt={`${type} button`}
            />
            {/*eslint-disable-next-line react/prop-types*/}
            <p className={`${styles.button_type} ${type === "delete" ? styles.delete : ""}`}>
                {type}
            </p>
        </button>
    )
}

export default ActionBtn