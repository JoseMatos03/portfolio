import React from "react";

interface ConsoleDisplayProps {
  output: string[];
}

export default function ConsoleDisplay({ output }: ConsoleDisplayProps) {
  return (
    <div className="flex-grow flex flex-col-reverse overflow-y-auto">
      {output.map((line, idx) => (
        <pre key={idx} className="font-hack whitespace-pre-wrap">
          {line}
        </pre>
      ))}
    </div>
  );
}
