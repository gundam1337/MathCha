// Quiz.tsx
"use client";
import React, { useState } from "react";
import styles from "./Quiz.module.css";

interface Question {
  question: string;
  choices: string[];
}

interface QuizData {
  questions: Question[];
}

const quiz: QuizData = {
  questions: [
    {
      question: "What is your current level of comfort with mathematics?",
      choices: [
        "Beginner - I struggle with basic concepts",
        "Intermediate - I understand some concepts but need practice",
        "Advanced - I'm comfortable with most topics but want to improve",
      ],
    },
    {
      question: "What is your primary goal for taking this course?",
      choices: [
        "To improve my grades in school",
        "To prepare for a specific exam",
        "For personal interest and skill development",
        "To apply mathematics in my job or career",
      ],
    },
    {
      question: "How do you prefer to learn new mathematical concepts?",
      choices: [
        "Through visual aids and diagrams",
        "By solving practice problems",
        "By watching video explanations",
        "Through real-world examples and applications",
      ],
    },
  ],
};

const Quiz: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];

  const onAnswerSelected = (answer: string) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[activeQuestion] = answer;
      return newAnswers;
    });
  };

  const onClickNext = () => {
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const addLeadingZero = (number: number): string =>
    number > 9 ? `${number}` : `0${number}`;

  return (
    <div className={styles.quizContainer}>
      {!showResult ? (
        <div>
          <div>
            <span className={styles.activeQuestionNo}>
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className={styles.totalQuestion}>
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul className={styles.choicesList}>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnswerSelected(choice)}
                key={index}
                className={
                  selectedAnswers[activeQuestion] === choice
                    ? styles.selectedAnswer
                    : ""
                }
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className={styles.flexRight}>
            <button
              onClick={onClickNext}
              disabled={!selectedAnswers[activeQuestion]}
              className={styles.nextButton}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.result}>
          <h3>Thank you for completing the survey!</h3>
          <p>Your responses have been recorded.</p>
          <p>
            We appreciate your input and will use this information to tailor our
            services to better meet your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
