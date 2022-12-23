import { useState } from "react";
import axios from "axios";
import style from "../../sass/home.module.scss";

const QuestionBox = ({ item }) => {
  const [showAns, setShowAns] = useState(false);
  const [solution, setSolution] = useState([]);
  const getSolutions = (questionID) => {
    axios
      .post("http://localhost:8080/solutions", {
        questionID,
      })
      .then((res) => setSolution(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={style.question_box} key={item._id}>
      <h3>{item.title}</h3>
      <button
        onClick={() => {
          getSolutions(item._id);
          setShowAns(!showAns);
        }}
      >
        {showAns ? "Hide Solution" : "Show Solution"}
      </button>
      {showAns && (
        <div className={style.solution_box}>
          {solution.map((item) => {
            return <div key={item._id}>{item.title}</div>;
          })}
          <div className={style.solution_input_box}>
            <input type={"text"} placeholder="Enter Solution" />
            <button>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
