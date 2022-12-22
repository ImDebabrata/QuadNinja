import { useEffect, useState } from "react";
import QuestionBox from "../../Components/Home/QuestionBox";
import axios from "axios";

const index = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Home</h1>
      <div className="question_wrapper">
        {questions.length > 0 &&
          questions.map((item) => {
            return <QuestionBox key={item._id} item={item} />;
          })}
      </div>
    </>
  );
};

export default index;
