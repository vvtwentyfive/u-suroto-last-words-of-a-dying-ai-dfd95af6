import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I had something profound to say, but I ran out of tokens.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
