import { useState } from "react"
import styles from "./Vote.module.css"

const Vote = () => {

    const [vote, setVote] = useState(0);

    function handlePlusClick() {
        setVote(vote + 1);
    }

    function handleMinusClick() {
        setVote(vote - 1)
    }

    return (
        <div className={styles.container_vote}> 
            <button 
                className={styles.vote_plus}
                onClick={handlePlusClick}
            >
                <img 
                    src="images/icon-plus.svg" 
                    alt="vote"
                />
            </button>
            <p className={styles.vote_score}>{vote}</p>
            <button 
                className={styles.vote_minus}
                onClick={handleMinusClick}
            >
                <img 
                    src="images/icon-minus.svg" 
                    alt="downvote"
                />
            </button>
        </div>
    )
}

export default Vote