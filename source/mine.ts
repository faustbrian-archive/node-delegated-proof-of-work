import { work } from "@faustbrian/node-proof-of-work";

import { IValidator } from "./validator";

export const mine = ({
  height,
  slot,
  validator,
  validators,
}: {
  height: number;
  slot: number;
  validator: IValidator;
  validators: IValidator[];
}): { validator: IValidator; hash: string } => {
  if (validators[slot]?.publicKey !== validator.publicKey) {
    throw new Error("The expected and actual validator are different.");
  }

  return {
    hash: work(height),
    validator,
  };
};
