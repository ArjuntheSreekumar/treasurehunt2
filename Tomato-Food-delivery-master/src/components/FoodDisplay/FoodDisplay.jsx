import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../../firebase";
import "./FoodDisplay.css";

export const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);

  const puzzleQuestions = {
    Puzzle1: ["(3points)", "You are and always will be a _________"],
    Puzzle2: ["(3points)", "https://www.hongkiat.com/blog/creative-404-error-pages/", "Ninjas are _______ ?"],
    Puzzle3: ["(4points)", "LinkedIn based question"],
    Puzzle4: ["(5points)", "Like all good lovers, they start with the head.", "_________"],
    Puzzle5: ["(5points)", "A city must be untangled to be understood", "I will be there before and after you I am ________"]
  };

  const correctAnswers = {
    Puzzle1: { answer: "winner", points: 3 },
    Puzzle2: { answer: "anonymous", points: 3 },
    Puzzle3: { answer: "linkedin", points: 4 },
    Puzzle4: { answer: "lemons", points: 5 },
    Puzzle5: { answer: "tardigrade", points: 5 }
  };

  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});
  const [cooldown, setCooldown] = useState({});

  const handleChange = (e, puzzle) => {
    setUserAnswers({
      ...userAnswers,
      [puzzle]: e.target.value
    });
  };

  const saveToFirestore = async (puzzle, points) => {
    const user = auth.currentUser;
    const userEmail = user ? user.email : "anonymous@example.com";

    try {
      await addDoc(collection(db, "user_puzzle_answers"), {
        puzzleNumber: puzzle,
        points: points,
        userEmail: userEmail,
        timestamp: serverTimestamp(),
      });
      console.log("Data saved to Firestore!");
    } catch (error) {
      console.error("Error saving to Firestore:", error);
    }
  };

  const checkAnswer = async (puzzle) => {
    if (cooldown[puzzle]) return;

    setCooldown((prev) => ({ ...prev, [puzzle]: true }));
    setTimeout(() => {
      setCooldown((prev) => ({ ...prev, [puzzle]: false }));
    }, 5000);

    const isCorrect = userAnswers[puzzle]?.trim().toLowerCase() === correctAnswers[puzzle].answer;

    if (isCorrect) {
      addToCart(puzzle, correctAnswers[puzzle].points);
      await saveToFirestore(puzzle, correctAnswers[puzzle].points);
    }

    setResults({
      ...results,
      [puzzle]: isCorrect
    });
  };

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} className="food-item-container">
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />

                <div className="food-questions">
                  {puzzleQuestions[item.name]?.map((question, qIndex) => (
                    <p key={qIndex}>{question}</p>
                  ))}
                </div>

                {correctAnswers[item.name] && (
                  <div className="answer-input">
                    <input
                      type="text"
                      value={userAnswers[item.name] || ""}
                      onChange={(e) => handleChange(e, item.name)}
                      placeholder="Enter your answer"
                      disabled={results[item.name]}
                    />
                    <button
                      onClick={() => checkAnswer(item.name)}
                      className="check-answer-btn"
                      disabled={results[item.name] || cooldown[item.name]}
                    >
                      {cooldown[item.name] ? "Wait 5s..." : "Check Answer"}
                    </button>
                    {results[item.name] !== undefined && (
                      <span className={`result ${results[item.name] ? "correct" : "incorrect"}`}>
                        {results[item.name] ? "✅ Correct" : "❌ Incorrect"}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};