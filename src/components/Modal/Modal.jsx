import Actions from "../Actions/Actions"
import styles from "./Modal.module.css"

const Modal = ( data, setData, modalState, setModalState) => {

    //generates a new key and saves it into localStorage
    function generateKey() {
        const key = localStorage.getItem("id");
        const parsedId = parseInt(key) + 1;
        localStorage.setItem("id", parsedId);
        return parsedId;
    }

    return (
        <div className={styles.dark_layer} style={{visibility: modalState}}>
            <div className={styles.modal}>
                <p className={styles.title}>Delete comment</p>
                <p className={styles.paragraph}>
                    Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone.
                </p>
                <div className={styles.buttons}>
                    <Actions 
                        id={generateKey()}
                        category={"modal"}
                        type={"no, cancel"}
                        data={data}
                        setData={setData}
                        modalState={modalState}
                        setModalState={setModalState}
                    />
                    <Actions 
                        id={generateKey()}
                        category={"modal"}
                        type={"yes, delete"}
                        data={data}
                        setData={setData}
                        modalState={modalState}
                        setModalState={setModalState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal