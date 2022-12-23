import { useEffect, useState } from "react";
import style from "../../sass/home.module.scss";
import QuestionBox from "../../Components/Home/QuestionBox";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";

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
      <Navbar />
      <div className={style.post_new_question}>
        <input />
        <button>Post Question</button>
      </div>
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
