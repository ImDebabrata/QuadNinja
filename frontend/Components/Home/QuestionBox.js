import { useState } from "react";
import style from "../../sass/home.module.scss";
import axios from "axios";

const QuestionBox = ({ item }) => {
  const [showAns, setShowAns] = useState(false);
  const getSolutions = (questionID) => {
    axios
      .post("http://localhost:8080/solutions", {
        questionID,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div
      className={style.question_box}
      onClick={() => getSolutions(item._id)}
      key={item._id}
    >
      <h3>{item.title}</h3>
      <button>show</button>
    </div>
  );
};

export default QuestionBox;
