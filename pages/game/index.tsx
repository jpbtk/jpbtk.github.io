import { useState } from "react";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [guess, setGuess] = useState<number | null>(null);
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuessChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newGuess = parseInt(event.target.value, 10);
    setGuess(isNaN(newGuess) ? null : newGuess);
  }

  function handleGuessSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (guess !== null) {
      alert(guess === targetNumber ? "Congratulations! You guessed it!" : "Try again!");
      setTargetNumber(generateRandomNumber());
      setGuess(null);
    }
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Can you guess the number between 1 and 100?</p>
          <form onSubmit={handleGuessSubmit}>
            <input
              type="number"
              value={guess || ""}
              onChange={handleGuessChange}
              placeholder="Enter your guess"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
