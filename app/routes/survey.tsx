import { useState } from "react";
import { CornerDownLeft, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface Choice {
  value: string;
}

interface SurveyQuestion {
  id: number;
  question?: string;
  choices: Choice[];
}

const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: "What is your role?",
    choices: [
      { value: "Founder" },
      { value: "Executive" },
      { value: "Product Manager" },
      { value: "Product Owner" },
      { value: "Software Engineer" },
    ],
  },
  {
    id: 2,
    question: "What's your company size?",
    choices: [
      { value: "only me" },
      { value: "1-5 employees" },
      { value: "6-10 employees" },
      { value: "11-100 employees" },
      { value: "over 100 employees" },
    ],
  },
  {
    id: 3,
    question: "How did you hear about us first?",
    choices: [
      { value: "Recommendation" },
      { value: "Social Media" },
      { value: "Ads" },
      { value: "Google Search" },
      { value: "In a Podcast" },
    ],
  },
];

export default function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(surveyQuestions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = surveyQuestions[step - 1]; // step 1 = first question

  const handleChoice = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step - 1] = value;
    setAnswers(updatedAnswers);
  };

  const handleStartSurvey = () => {
    setStep(1);
  };

  const handleNext = () => {
    const currentAnswer = answers[step - 1];
    if (!currentAnswer) return;

    if (step < surveyQuestions.length) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else if (step === 1) {
      setStep(0);
    }
  };

  return (
    <div>
      <header className="pt-6 pl-4 p-4 z-10 md:fixed md:top-4 md:left-4 md:p-0">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Backstage Talk Logo"
            className="w-[160px] h-[17.88px] md:w-[260px] md:h-[29.5px] bg-transparent"
          />
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen">
        {/* Welcome Screen */}
        {step === 0 && !submitted && (
          <div className="flex flex-col gap-3  md:border md:border-blue-100 pt-8 pb-7 px-5 rounded-xl min-w-[38vw]">
            <h1 className="font-bold text-xl">Welcome!</h1>
            <p className="text-gray-600 font-semibold text-[0.9rem] md:text-xl">
              Thanks for providing your feedback - let's go!
            </p>
            <div className="flex flex-row gap-3 mt-4">
              <div className="inline-block border-3 border-gray-500 rounded-2xl">
                <button
                  onClick={handleStartSurvey}
                  className="bg-gray-500 hover:bg-gray-600 text-white p-[14px] border-3 border-white rounded-xl text-xl font-semibold cursor-pointer"
                >
                  Next
                </button>
              </div>
              <span className="flex items-center gap-1 text-gray-600 font-semibold text-sm">
                Press Enter
                <CornerDownLeft size={14} className="text-gray-500" />
              </span>
            </div>
            <span className="flex justify-center text-gray-400 gap-1 text-sm font-bold">
              Powered by{" "}
              <span className="text-gray-500 font-extrabold">Formbricks</span>
            </span>
            <div className="mx-auto w-[90%] h-[9px] bg-gray-500 rounded-2xl"></div>
          </div>
        )}

        {/* Question Screen */}
        {step > 0 && step <= surveyQuestions.length && !submitted && (
          <div className="flex flex-col gap-4  md:border md:border-blue-100 pt-8 pb-7 px-5 rounded-xl min-w-[38vw]">
            <h2 className="font-bold text-xl">{currentQuestion.question}</h2>
            <p className="text-gray-600 font-semibold text-base">
              Please select one of the following options:
            </p>
            <div className="flex flex-col gap-2">
              {currentQuestion.choices.map((choice, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-gray-600 font-semibold text-base 
                bg-blue-50/30 border border-blue-300 rounded-lg p-4 cursor-pointer
                hover:bg-blue-50 hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <input
                    type="radio"
                    name={`question-${step}`}
                    value={choice.value}
                    checked={answers[step - 1] === choice.value}
                    onChange={() => handleChoice(choice.value)}
                  />
                  {choice.value}
                </label>
              ))}
            </div>
            <div
              className={`flex justify-between mt-4 ${step === 1 ? "justify-end" : ""}`}
            >
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="bg-white hover:bg-gray-200 text-gray-700 font-semibold border border-blue-100 p-4 rounded-xl cursor-pointer"
                >
                  Back
                </button>
              )}

              <button
                onClick={handleNext}
                disabled={!answers[step - 1]}
                className={`bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-xl ${
                  !answers[step - 1] ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {step === surveyQuestions.length ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}

        {/* Summary Screen */}
        {submitted && (
          <div className="flex flex-col gap-5 md:border md:border-blue-100 pt-8 pb-7 px-5 rounded-xl min-w-[38vw]">
            <div className="flex flex-col items-center text-center gap-2">
              <div>
                <CircleCheck size={100} className="text-gray-500" />
              </div>
              <div className="w-30 h-3 bg-[radial-gradient(ellipse_at_center,_rgb(107,114,128)_0%,_transparent_60%)] rounded-full" />
              <h2 className="font-bold text-xl">Thank you!</h2>
              <p className="text-gray-600 font-semibold text-base">
                We appreciate your feedback.
              </p>
            </div>
            <p className="flex items-center gap-3 font-medium">
              <CircleCheck className="text-gray-500" /> Welcome Card
            </p>
            <ul className="flex flex-col gap-4">
              {surveyQuestions.map((q, i) => (
                <li key={q.id}>
                  <p className="text-gray-500 font-medium">{q.question}</p>
                  <p className="font-bold text-lg">{answers[i]}</p>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <CircleCheck className="text-gray-500" />
              <span className="font-medium bg-blue-50 px-[10px] rounded-xl">
                Completed
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
