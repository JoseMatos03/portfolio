import { about } from "../commands/about";
import { projects } from "../commands/projects";
import { contact } from "../commands/contact";
import { help } from "../commands/help";

export type CommandResult = string[];

/**
 * Takes a raw command string and returns the array of lines
 * that should be printed to the console.
 */
export function processCommand(rawInput: string): CommandResult {
  const [cmd, ...args] = rawInput.trim().split(/\s+/);
  switch (cmd.toLowerCase()) {
    case "about":
      return about();
    case "projects":
      // you could pass args to list/detail subcommands
      return projects(args);
    case "contact":
      return contact();
    case "help":
      return help();
    case "clear":
      // signal to clear the console (handled in your hook)
      return ["__CLEAR__"];
    default:
      return [
        `❓ Command not found: “${cmd}”`,
        `Type “help” to see the list of available commands.`,
      ];
  }
}
