import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-xcode";
import "../pages/Forums/Forums.css";
import "../pages/Styling.css";

const CodeFormat = ({ code, setCode }) => {
  return (
    <div className="code-format">
      <AceEditor
        mode="css"
        theme="github"
        value={code}
        onChange={setCode}
        name="my-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeFormat;
