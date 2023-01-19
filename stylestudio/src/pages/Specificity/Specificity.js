import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useEffect } from "react";
import "./Specificity.css";
import { specificityCalculator } from "../../Utilities/SpecificityCalculator";
import "./components/Table/Table";
import { CustomizedTable } from "./components/Table/Table";
import "../Styling.css";
import { default as CodeFormat } from "../../components/Code_format";
import "../Guides/Guides.css";
import "../../App.css";
export function Specificity() {
  const [cssInput, setCSSInput] = useState("");
  const [cssSpec, setCSSSpec] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false);
  const [indents, setIndents] = useState(4);
  const ranking = { 1: "st", 2: "nd", 3: "rd", 4: "th" };
  const handleIndentChange = (e) => {
    setIndents(e);
  };
  const handleCSSChange = (e) => {
    setCSSInput(e);
  };
  const handleButtonPress = () => {
    if (cssInput !== "") {
      setInvalidInput(false);
      setCSSSpec(specificityCalculator(cssInput, indents));
    } else {
      setCSSSpec("");
      setInvalidInput(true);
    }
  };
  const generateLeaderboard = (cssSpec, type) => {
    let rankAppend = "";
    if (!invalidInput) {
      const leaderboard = cssSpec.map((el, i) => {
        if (i <= 2) {
          rankAppend = ranking[i + 1];
        } else {
          rankAppend = ranking[4];
        }
        return (
          <div className="rank-card">
            <span>
              {type === "leaderboard" ? i + 1 + rankAppend + " :" + el : el}
            </span>
          </div>
        );
      });
      return leaderboard;
    }
  };
  useEffect(() => {
    generateLeaderboard(cssSpec);
  }, [cssSpec]);
  return (
    <>
      <div className="main-container">
        <h2 className="title-spec title-change">Specificity Leaderboard</h2>
        <hr
          style={{
            margin: "10px",
            marginBottom: "20px",
            opacity: "0.25",
            color: "white",
          }}
        />
        <p id="spec-descrip">
          Input your CSS on the left hand textbox, and ensure your indent number
          is correct!
        </p>
        <hr
          style={{
            margin: "10px",
            marginBottom: "20px",
            opacity: "0.5",
            color: "white",
            borderWidth: "1px",
          }}
        />
        <div className="main">
          <div>
            {" "}
            <h4 style={{ color: "white" }}> Your CSS code here</h4>
            <h4 style={{ color: "white" }}>&#8681;</h4>
            <div className="code-container">
              <CodeFormat handleNewFormInput={handleCSSChange} />
            </div>
          </div>
          <div className="button-container">
            <Button
              variant="primary"
              className="go-button"
              onClick={handleButtonPress}
            >
              Go!
            </Button>
            <DropdownButton title={"indents: " + indents}>
              <Dropdown.Item title="2" onClick={() => handleIndentChange(2)}>
                2{console.log("spec is ", cssInput)}
              </Dropdown.Item>
              <Dropdown.Item title="3" onClick={() => handleIndentChange(3)}>
                3
              </Dropdown.Item>
              <Dropdown.Item title="4" onClick={() => handleIndentChange(4)}>
                4
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="leaderboard-container">
            {cssSpec.length === 0 ? (
              ""
            ) : (
              <div style={{ border: "100px" }}>
                <CustomizedTable values={cssSpec} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
