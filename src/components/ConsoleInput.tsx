import React, { KeyboardEvent, useState } from "react";

interface ConsoleInputProps {
  onSubmit: (cmd: string) => void;
}

export default function ConsoleInput({ onSubmit }: ConsoleInputProps) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = input.trim();
      if (cmd.length) {
        onSubmit(cmd);
      }
      setInput("");
    }
  };

  return (
    <div className="flex items-center mt-2">
      <span className="pr-2">{"> "}</span>
      <input
        type="text"
        className="bg-transparent outline-none text-text w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
}
