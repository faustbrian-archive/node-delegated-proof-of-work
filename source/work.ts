import { hash as sha256 } from "@faustbrian/node-sha256";

export const work = (difficulty: number): string => {
  let nonce = 0;
  let hash = "0";

  while (
    hash.slice(0, Math.max(0, difficulty)) !==
      Array.from({ length: difficulty + 1 }).join("0")
  ) {
    nonce++;

    hash = sha256(nonce.toString()).toString("hex");
  }

  return hash;
};
