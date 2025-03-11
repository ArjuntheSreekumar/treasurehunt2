import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { db, auth } from "../../firebase";
import { collection, getDoc, getDocs, query, where, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./FoodDisplay.css";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  const puzzleQuestions = {
    Puzzle1: { points: 3, question: ["(3points)", "You are and always will be a _________"] },
    Puzzle2: { points: 3, question: ["(3points)", "https://www.hongkiat.com/blog/creative-404-error-pages/", "Ninjas are _______ ?"] },
    Puzzle3: { points: 4, question: ["(4points)", "What fallath from thy curtains"] },
    Puzzle4: { points: 5, question: ["(5points)", "Like all good lovers, they start with the head.", "_________"] },
    Puzzle5: { points: 5, question: ["(5points)", "A city must be untangled to be understood", "I will be there before and after you I am ________"] },
  };

  const [user, setUser] = useState(null);
  const [puzzleAnswers, setPuzzleAnswers] = useState({});
  const [solvedPuzzles, setSolvedPuzzles] = useState({});
  const [userAnswers, setUserAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      if (loggedInUser) {
        fetchPuzzles(loggedInUser.email);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const fetchPuzzles = async (userEmail) => {
    try {
      setLoading(true);

      // Fetch correct answers from database
      const puzzleDoc = await getDoc(doc(db, "Puzzle_ans", "Puzzle_ans"));
      if (puzzleDoc.exists()) {
        setPuzzleAnswers(puzzleDoc.data());
      } else {
        console.error("No puzzle data found!");
      }

      if (userEmail) {
        // Fetch user's solved puzzles
        const solvedQuery = query(collection(db, "user_puzzle_answers"), where("userEmail", "==", userEmail));
        const solvedSnapshot = await getDocs(solvedQuery);

        let solvedMap = {};
        let userAnswerMap = {};
        let points = 0;

        solvedSnapshot.forEach((doc) => {
          const data = doc.data();
          const puzzleNum = data.puzzleNumber;
          solvedMap[puzzleNum] = true;
          userAnswerMap[puzzleNum] = data.answer || "";
          if (puzzleQuestions[puzzleNum]) {
            points += puzzleQuestions[puzzleNum].points;
          }
        });

        setSolvedPuzzles(solvedMap);
        setUserAnswers(userAnswerMap);
        setTotalPoints(points);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching puzzles:", error);
      setLoading(false);
    }
  };

  const handleChange = (e, puzzle) => {
    setUserAnswers({
      ...userAnswers,
      [puzzle]: e.target.value,
    });
  };

  const checkAnswer = async (puzzle) => {
    if (solvedPuzzles[puzzle] || !user) return;

    try {
      const correctAnswer = puzzleAnswers[puzzle]?.toLowerCase().trim();
      const userAnswer = userAnswers[puzzle]?.toLowerCase().trim();

      if (!correctAnswer || !userAnswer) return;

      if (userAnswer === correctAnswer) {
        const userPuzzleDocRef = doc(db, "user_puzzle_answers", `${user.email}_${puzzle}`);
        await setDoc(userPuzzleDocRef, {
          puzzleNumber: puzzle,
          userEmail: user.email,
          answer: userAnswer,
          timestamp: serverTimestamp(),
        });

        const newTotalPoints = totalPoints + puzzleQuestions[puzzle].points;
        setTotalPoints(newTotalPoints);
        setSolvedPuzzles((prev) => ({ ...prev, [puzzle]: true }));

        await setDoc(doc(db, "user_total_points", user.email), {
          email: user.email,
          totalPoints: newTotalPoints,
        });
      } else {
        alert("Incorrect answer! Try again.");
      }
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  if (loading) return <p>Loading puzzles...</p>;

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            const isSolved = solvedPuzzles[item.name];

            return (
              <div key={index} className="food-item-container">
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />

                {puzzleQuestions[item.name] && (
                  <div className="food-questions">
                    {puzzleQuestions[item.name].question.map((question, qIndex) => (
                      <p key={qIndex}>{question}</p>
                    ))}
                  </div>
                )}

                {!isSolved && puzzleQuestions[item.name] && (
                  <div className="answer-input">
                    <input
                      type="text"
                      value={userAnswers[item.name] || ""}
                      onChange={(e) => handleChange(e, item.name)}
                      placeholder="Enter your answer"
                    />
                    <button onClick={() => checkAnswer(item.name)} className="check-answer-btn">
                      Check Answer
                    </button>
                  </div>
                )}

                {isSolved && <p className="solved-text">✅ Solved</p>}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="total-points">
        <h3>Total Points Earned: {totalPoints}</h3>
      </div>
    </div>
  );
};
