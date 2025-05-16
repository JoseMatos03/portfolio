import { useState, useEffect } from "react";
import { intro } from "../constants/intro";
import { processCommand } from "../utils/commandProcessor";

export default function useConsole() {
  const [output, setOutput] = useState<string[]>([]);
  useEffect(() => setOutput(intro.reverse()), []);
  const handleCommand = (cmd: string) => {
    const result = processCommand(cmd);
    if (result.includes("__CLEAR__")) {
      setOutput(intro);
    } else {
      setOutput((prev) => [...result, `> ${cmd}`, ...prev,]);
    }
  };
  return { output, handleCommand };
}
