export const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 }
];
export const dataCategories = [
  { x: "food", y: 80 },
  { x: "food", y: 50 },
  { x: "food", y: 40 },
  { x: "leisure", y: 41 },
  { x: "leisure", y: 10 },
  { x: "leisure", y: 70 },
  { x: "transport", y: 60 },
  { x: "transport", y: 30 },
  { x: "transport", y: 20 },
  { x: "transport", y: 30 },
  { x: "household", y: 28 },
  { x: "household", y: 73 },
  { x: "household", y: 47 },
  { x: "household", y: 63 },
  { x: "living", y: 90 },
  { x: "living", y: 130 },
  { x: "living", y: 65 },
  { x: "living", y: 75 }
];
export const colorRange = [
  "#19CDD7",
  "#50ed62",
  "#35884a",
  "#FF991F",
  "#F15C17",
  "#ad30ba"
];
export const colorDomain = [
  "#19CDD7",
  "#50ed62",
  "#35884a",
  "#FF991F",
  "#F15C17",
  "#ad30ba"
];
export const user = {
  balance: 3000,
  remaining: 500,
  expended: 2500 // All transactions sum
};
export const AccountInfo = {
  name: "Living",
  budget: 1000,
  expense: 700,
  color: "#123321",
  remaining: "",
  objectives: [
    {
      // If completed true add rewared to budget
      description: "Running 5km",
      reward: 50,
      completed: false
    }
  ]
};
export const transaction = [
  {
    date: "10/10/10",
    amount: 150,
    beneficiary: "Oma",
    category: "Sugar",
    account: "Living"
  }
];
