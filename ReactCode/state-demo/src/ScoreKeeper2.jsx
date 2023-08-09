import { useState } from "react"
export default function ScoreKeeper2({ numPlayers = 3, target = 5 }) {
    const [scores, setScores ] = useState(new Array(numPlayers).fill(0));
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score,idx) => {
                    return (
                        <li key={idx}>
                            Player{idx + 1}: {score}
                            <button>+1</button>
                        </li>
                )}) }
            </ul>
        </div>
    )
}