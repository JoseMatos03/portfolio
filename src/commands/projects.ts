export function projects(args: string[]): string[] {
  if (args[0] === "detail" && args[1]) {
    const id = args[1];
    // You could switch on id to show details
    return [`🔎 Details for project ${id}: …`];
  }
  // default list view
  return [
    "🚀 1) CoolApp — A React-based task manager",
    "📱 2) GameBot — Discord bot for gaming stats",
    "🔗 Type “projects detail <number>” for more info.",
  ];
}