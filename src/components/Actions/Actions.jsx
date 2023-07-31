import styles from "./Actions.module.css"

// eslint-disable-next-line react/prop-types
const Actions = ({ types }) => {

    function buildUrl(type) {
        return `images/icon-${type}.svg`;
    }

    function ActionBtn(type, index) {
        return (
            <button className={styles.action_button} key={index}>
                <img
                    src={buildUrl(type)}
                    alt={`${type} button`}
                />
                {/*eslint-disable-next-line react/prop-types*/}
                <p className={`${styles.button_type}
                    ${type === "delete" ? styles.delete : ""}`}>
                    {type}
                </p>
            </button>
        )
    }

    return (
        <div className={styles.container_action_buttons}>
            {/* eslint-disable-next-line react/prop-types */}
            {types.map((type, index) => ActionBtn(type, index))}
        </div>
    )
}

export default Actions