import React, { useState, useRef } from "react";
import "./Course_one.css";

const CourseOne = () => {
  const arr1 = [
    {
      question: "What is 13 + 23?",
      answer: "36",
    },
    {
      question: "What is 45 - 18?",
      answer: "27",
    },
  ];

  const [userAnswers, setUserAnswers] = useState(["", ""]);
  const [feedback, setFeedback] = useState("");
  const [totalTime, setTotalTime] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [rank, setRank] = useState(null);
  const [randomString, setRandomString] = useState(null);
  const [showNameForm, setShowNameForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [courseName] = useState("Maths");
  const [issuer] = useState("HPDSX");
  const timerRef = useRef(null);

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmitAnswers = (e) => {
    e.preventDefault();
    const isCorrect =
      userAnswers[0].trim() === arr1[0].answer &&
      userAnswers[1].trim() === arr1[1].answer;

    if (isCorrect) {
      const totalTimeTaken = Math.floor((Date.now() - timerRef.current) / 1000); // Calculate total time in seconds
      setTotalTime(totalTimeTaken);
      setTotalAttempts((prevAttempts) => prevAttempts + 1);

      const randomRank = Math.floor(Math.random() * 100) + 1;
      setRank(randomRank);

      const generatedString = generateRandomString(64);
      setRandomString(generatedString);

      setShowNameForm(true); // Show the name form
    } else {
      setFeedback("Try again after some time.");
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();

    const newWindow = window.open("", "_blank");
    newWindow.document.title = "Certificate";
    newWindow.document.body.innerHTML = `<html>
      <head>
        <title>Certificate</title>
      </head>
      <body>
        <h1>Congratulations! certificate of completion</h1>
        <p>Your name: ${userName}</p>
        <p>Course: ${courseName}</p>
        <p>Date: ${currentDate}</p>
        <p>Issuer: ${issuer}</p>
        <p>Your certificate ID: ${randomString}</p>
      </body>
      <footer>
        Go to the previous page for a detailed analysis
      </footer>
    </html>`;
  };

  const startTimer = () => {
    timerRef.current = Date.now();
  };

  return (
    <div className="container">
      <h1 className="heading">Maths Certification</h1>
      {!showNameForm ? (
        <>
          {arr1.map((item, index) => (
            <div key={index}>
              <h3 className="question">
                Question {index + 1}: {item.question}
              </h3>
              <form onSubmit={handleSubmitAnswers}>
                <input
                  type="text"
                  value={userAnswers[index]}
                  onChange={(e) => {
                    const updatedAnswers = [...userAnswers];
                    updatedAnswers[index] = e.target.value;
                    setUserAnswers(updatedAnswers);
                  }}
                  className="answer-input"
                  placeholder="Enter your answer"
                  onFocus={startTimer}
                />
              </form>
            </div>
          ))}
          <button type="submit" onClick={handleSubmitAnswers} className="submit-button">
            Submit
          </button>
          <div className="feedback">{feedback}</div>
        </>
      ) : (
        <form onSubmit={handleNameSubmit}>
          <label htmlFor="userName">Enter your name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Generate Certificate
          </button>
        </form>
      )}
      {rank !== null && (
        <div className="analytics">
          <p>Total Time Taken: {totalTime} seconds</p>
          <p>Total Attempts: {totalAttempts}</p>
          <p>Your Rank: {rank}/100</p>
          {/* {randomString && <p>Your certificate ID: {randomString}</p>} */}
        </div>
      )}
    </div>
  );
};

export default CourseOne;
