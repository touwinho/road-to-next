export const initialTickets = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the first content of ticket 1.",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the second content of ticket 2.",
    status: "OPEN" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "This is the content of ticket 3.",
    status: "IN_PROGRESS" as const,
  },
];
