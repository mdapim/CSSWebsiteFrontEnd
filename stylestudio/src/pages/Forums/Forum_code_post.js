import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-xcode";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

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
      <Button
        style={{ backgroundColor: "black", marginLeft: "3px", border: "none" }}
        ref={target}
        onClick={() => {
          handleCopy();
        }}
      >
        Copy code
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Code copied!
          </Tooltip>
        )}
      </Overlay>
      <AceEditor
        mode="css"
        theme="xcode"
        name="code"
        value={inputtedCode}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default ForumCodePost;
