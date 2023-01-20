import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import "../pages/Forums/Forums.css";
import "../pages/Styling.css";

const CodeFormat = ({ handleNewFormInput }) => {
  return (
    <div className="code-format">
      <AceEditor
        mode="css"
        theme="twilight"
        onChange={handleNewFormInput}
        name="code"
        showPrintMargin={true}
        setOptions={{
          useSoftTabs: false,
          autoScrollEditorIntoView: true,
          behavioursEnabled: true,
          wrapBehavioursEnabled: true,
        }}
      />
    </div>
  );
};

export default CodeFormat;
