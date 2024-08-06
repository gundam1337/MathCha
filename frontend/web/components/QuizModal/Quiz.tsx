  "use client";
  import React, { useState } from "react";
  import Link from "next/link";
  import styles from "./Quiz.module.css";
  import { Button } from "@nextui-org/react";
  import {
    FaBook,
    FaGraduationCap,
    FaBriefcase,
    FaChartLine,
  } from "react-icons/fa";
  import { BsPencilSquare, BsPlayCircle, BsGlobe } from "react-icons/bs";

  interface Question {
    question: string;
    choices: { text: string; icon: React.ReactNode }[];
  }

  interface QuizData {
    questions: Question[];
  }

  const quiz: QuizData = {
    questions: [
      {
        question: "What is your current level of comfort with mathematics?",
        choices: [
          { text: "Beginner - I struggle with basic concepts", icon: <FaBook /> },
          {
            text: "Intermediate - I understand some concepts but need practice",
            icon: <FaGraduationCap />,
          },
          {
            text: "Advanced - I'm comfortable with most topics but want to improve",
            icon: <FaChartLine />,
          },
        ],
      },
      {
        question: "What is your primary goal for taking this course?",
        choices: [
          { text: "To improve my grades in school", icon: <FaGraduationCap /> },
          { text: "To prepare for a specific exam", icon: <BsPencilSquare /> },
          {
            text: "For personal interest and skill development",
            icon: <FaBook />,
          },
          {
            text: "To apply mathematics in my job or career",
            icon: <FaBriefcase />,
          },
        ],
      },
      {
        question: "How do you prefer to learn new mathematical concepts?",
        choices: [
          { text: "Through visual aids and diagrams", icon: <FaChartLine /> },
          { text: "By solving practice problems", icon: <BsPencilSquare /> },
          { text: "By watching video explanations", icon: <BsPlayCircle /> },
          {
            text: "Through real-world examples and applications",
            icon: <BsGlobe />,
          },
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
            <div className={styles.questionHeader}>
              <span className={styles.activeQuestionNo}>
                {addLeadingZero(activeQuestion + 1)}/
                {addLeadingZero(questions.length)}
              </span>
            </div>
            <h2 className={styles.questionText}>{question}</h2>
            <ul className={styles.choicesList}>
              {choices.map((choice, index) => (
                <li
                  onClick={() => onAnswerSelected(choice.text)}
                  key={index}
                  className={`${styles.choiceItem} ${
                    selectedAnswers[activeQuestion] === choice.text
                      ? styles.selectedAnswer
                      : ""
                  }`}
                >
                  <span className={styles.choiceIcon}>{choice.icon}</span>
                  {choice.text}
                </li>
              ))}
            </ul>
            <Button
              onClick={onClickNext}
              isDisabled={!selectedAnswers[activeQuestion]}
              color="success"
              className={styles.nextButton}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        ) : (
          <div className={styles.result}>
            <h3>Thank you for completing the survey!</h3>
            <p>Your responses have been recorded.</p>
            <p>
              We appreciate your input and will use this information to tailor our
              services to better meet your needs.
            </p>
            <Link href="/connect/signup" passHref>
              <Button color="primary" className={styles.createAccountButton}>
                Create Account
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  };

  export default Quiz;
