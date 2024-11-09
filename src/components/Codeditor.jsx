import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import rehypePrism from "rehype-prism-plus";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Codeditor() {
  const [code, setCode] = useState();
  const [language, setLanguage] = useState("js");

  return (
    <div>
      <CodeEditor
        value={code}
        language={language}
        placeholder="Please enter code."
        onChange={(evn) => setCode(evn.target.value)}
        rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}
        padding={15}
        style={{
          backgroundColor: "#36454F",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      {/* <Select
        onValueChange={(e) => {
          setLanguage(e);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Javascript" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="cpp">cpp</SelectItem>
          <SelectItem value="js">Javascript</SelectItem>

        </SelectContent>
      </Select> */}
    </div>
  );
}
