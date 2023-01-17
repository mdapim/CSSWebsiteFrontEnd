import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-xcode";
import "../pages/Forums/Forums.css";
import "../pages/Styling.css";

const CodeFormat = ({ code, setCode, handleNewFormInput }) => {
  return (
    <div className="code-format">
      <AceEditor
        mode="css"
        theme="xcode"
        onChange={handleNewFormInput}
        name="code"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeFormat;
