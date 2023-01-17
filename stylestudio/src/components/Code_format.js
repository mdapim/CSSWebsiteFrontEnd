import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-xcode";
import "../pages/Forums/Forums.css";

const CodeFormat = () => {
  const [code, setCode] = useState("");

  const codeExample = "4t34t43t34t34t";

  return (
    <div className="code-format">
      <AceEditor
        mode="css"
        theme="github"
        value={codeExample}
        onChange={setCode}
        name="my-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeFormat;
