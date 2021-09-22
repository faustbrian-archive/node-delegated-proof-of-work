export interface IValidator {
  publicKey: string;
  stake: number;
}

export const validator = (publicKey: string, stake: number): IValidator =>
  Object.freeze({ publicKey, stake });
