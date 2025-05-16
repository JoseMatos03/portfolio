"use client";
import ConsoleDisplay from "@/components/ConsoleDisplay";
import ConsoleInput from "@/components/ConsoleInput";
import useConsole from "@/hooks/useConsole";

export default function HomePage() {
  const { output, handleCommand } = useConsole();

  return (
    <div className="h-screen w-screen bg-background text-text font-mono overflow-hidden flex flex-col p-4">
      <ConsoleDisplay output={output} />
      <ConsoleInput onSubmit={handleCommand} />
    </div>
  );
}
