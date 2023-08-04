import styles from "./Actions.module.css"
import postStyles from "../Post/Post.module.css"

/*
    TODO:
    2 types of buttons (post, interact)
    post btn: reply, update, send
    interact btn: reply, edit, delete
    delete section btn: cancel, delete
*/

// eslint-disable-next-line react/prop-types
const Actions = ({ id, category, type, data, setData }) => {
    function buildUrl(type) {
        return `images/icon-${type}.svg`;
    }
    
    function handleEvents(category, type, e) {
        //post events: postReply, update, send
        //act events: actReply, edit, delete
        if(type === "send") {
            handleSend(e);
        } else if (type === "delete") {
            handleDelete(e);
        }
    }

    function handleSend(e) {
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
                    "id": id,
                    "content": textContent,
                    "createdAt": "now",
                    "score": 0,
                    "user": {
                    "image": { 
                        // eslint-disable-next-line react/prop-types
                        "png": data.currentUser.image.png,
                        // eslint-disable-next-line react/prop-types
                        "webp": data.currentUser.image.webp
                    },
                    // eslint-disable-next-line react/prop-types
                    "username": data.currentUser.username
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

    function handleDelete() {
        // eslint-disable-next-line react/prop-types
        let updatedComments = [...data.comments];
        
        // eslint-disable-next-line react/prop-types
        updatedComments = updatedComments.filter((comment) => comment.id !== parseInt(id));
        
        updatedComments = updatedComments.map((comment) => ({
            ...comment,
            replies: comment.replies.filter((reply) => reply.id !== parseInt(id))
        }))
        setData({...data, comments: updatedComments});
        localStorage.setItem("data", JSON.stringify({...data, comments: updatedComments}));
    }
      
      



    function handleUpdate() {}
    function handleReply() {}
    function handleEdit() {}

    return (
        <button
            className={`${category === "post" ? postStyles.post_btn : styles.action_button}`}
            onClick={(e) => handleEvents(category, type, e)}
            >
            {category === "act" ? 
            <>
                <img 
                    src={buildUrl(type)}
                    alt={type + " icon"}
                />
                {/* eslint-disable-next-line react/prop-types */}
                <p className = {`${styles.button_type} ${type.includes("delete") ? styles.delete : "" } ${type.includes("cancel") ? styles.cancel : ""}`}>{type}</p>
            </>
            : type }
        </button>
    )
}

export default Actions