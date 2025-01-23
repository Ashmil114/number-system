const SYMBOLS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type Covert = {
  data: number;
  numSymbols: number;
};

export function mainCovert({ data, numSymbols }: Covert): string[] {
  console.log("convert...");
  const newNumber: string[] = [];
  let r: number[] = [];
  for (let i = 0; i <= data; i++) {
    let a = i;
    const b = numSymbols;
    while (a !== 0) {
      r.unshift(a % b);
      a = Math.floor(a / b);
    }
    newNumber.push(r.map((item) => SYMBOLS[item]).join(""));
    r = [];
  }
  return newNumber;
}
