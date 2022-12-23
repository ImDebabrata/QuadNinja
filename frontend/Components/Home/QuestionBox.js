import { useState } from "react";
import axios from "axios";
import style from "../../sass/home.module.scss";
import { baseUrl } from "../../pages/api";
import { getLocalStorage } from "../LocalStorage/getLsData";

const QuestionBox = ({ item }) => {
  const [showAns, setShowAns] = useState(false);
  const [solution, setSolution] = useState([]);
  console.log("solution:", solution);
  const [solutionTxt, setSolutionTxt] = useState("");
  let login_user = getLocalStorage();

  const handlePostSolution = () => {
    if (login_user) {
      const payload = {
        title: solutionTxt,
        questionID: item._id,
        helperID: login_user.id,
        helperName: login_user.name,
      };
      axios
        .post(`${baseUrl}/solutions/create`, payload)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => getSolutions(item._id));
      setSolutionTxt("");
    } else {
      alert("Try Login First");
    }
  };

  const getSolutions = (questionID) => {
    // console.log(item.studentID, login_user.id);

    axios
      .post(`${baseUrl}/solutions`, {
        questionID,
      })
      .then((res) => setSolution(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={style.question_box} key={item._id}>
      <div className={style.question_area}>
        <h3>{item.title}</h3>
        {item.studentID === login_user?.id && <button>Delete Question</button>}
      </div>
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
            return (
              <div className={style.solutionAns}>
                <div key={item._id}>{item.title}</div>
                <div>Helper:{item.helperName}</div>
                {login_user.id === item.helperID && (
                  <button>Delete Solution</button>
                )}
              </div>
            );
          })}
          <div className={style.solution_input_box}>
            <textarea
              value={solutionTxt}
              onChange={(e) => setSolutionTxt(e.target.value)}
              type={"text"}
              placeholder="Enter Solution"
            />
            <button onClick={() => handlePostSolution()}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
