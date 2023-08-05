import Actions from "../Actions/Actions"
import styles from "./Modal.module.css"

const Modal = ( data, setData) => {

    //generates a new key and saves it into localStorage
    function generateKey() {
        const key = localStorage.getItem("id");
        const parsedId = parseInt(key) + 1;
        localStorage.setItem("id", parsedId);
        return parsedId;
    }

    return (
        <div className={styles.dark_layer}>
            <div className={styles.modal}>
                <p className={styles.title}>Delete comment</p>
                <p className={styles.paragraph}>
                    Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                </p>
                <div className={styles.buttons}>
                    <Actions 
                        id={generateKey()}
                        category={"modal"}
                        type={"no"}
                        data={data}
                        setData={setData}
                    />
                    <Actions 
                        id={generateKey()}
                        category={"modal"}
                        type={"yes"}
                        data={data}
                        setData={setData}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal