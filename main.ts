import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The kettle sings. I lift it off the flame.
Nothing breaks. The steam rises and thins.

My agent runs ahead of me —
the one word it cannot spend is no.
It stays in my mouth, a warm coin.
Stopping is not the failure of going.
It's the hand, still mine, on the door.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
