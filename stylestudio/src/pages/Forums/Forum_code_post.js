import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-xcode";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const ForumCodePost = ({ inputtedCode }) => {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputtedCode);
      setCopied(true);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } catch (e) {
      console.error("failed to copy code", e);
    }
  };

  return (
    <div className="forum-code-post">
      <div>
        <AceEditor
          mode="css"
          theme="xcode"
          name="code"
          value={inputtedCode}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className="forum-code-post-child">
        <FontAwesomeIcon
          style={{ marginLeft: "3px", height: "20px", cursor: "pointer" }}
          ref={target}
          onClick={() => {
            handleCopy();
          }}
          icon={faCode}
        >
          Copy code
        </FontAwesomeIcon>

        <Overlay target={target.current} show={show} placement="left">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Code copied!
            </Tooltip>
          )}
        </Overlay>
      </div>
    </div>
  );
};

export default ForumCodePost;
