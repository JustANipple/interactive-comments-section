import styles from "./Actions.module.css"

/*
    TODO:
    2 types of buttons (post, interact)
    post btn: reply, update, send
    interact btn: reply, edit, delete
*/

// eslint-disable-next-line react/prop-types
const Actions = ({ category, type }) => {

    function handleSend() {}
    function handleUpdate() {}
    function handleReply() {}
    function handleDelete() {}
    function handleEdit() {}

    function buildUrl(type) {
        return `images/icon-${type}.svg`;
    }

    function postBtn() {
    }

    function actBtn() {
    }

    return (
        <button 
            className={category === "post" ? 
                        styles.post_btn : 
                        styles.action_button}
        >
            {category === "act" ? 
                <>
                <img 
                    src={buildUrl(type)}
                    alt={type + "icon"}
                />
                <p 
                    className = {`${styles.button_type} ${type === "delete" ? 
                                    styles.delete :
                                    ""}`}
                >{type}</p>
                </>
            : {type} }
        </button>
    )
}

export default Actions