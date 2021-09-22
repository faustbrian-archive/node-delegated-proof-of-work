import "jest-extended";

import { work } from "./work";

it.each([
  [1, "0"],
  [2, "00328ce57bbc14b33bd6695bc8eb32cdf2fb5f3a7d89ec14a42825e15d39df60"],
  [3, "000f21ac06aceb9cdd0575e82d0d85fc39bed0a7a1d71970ba1641666a44f530"],
  [4, "0000a456e7b5a5eb059e721fb431436883143101275c4077f83fe70298f5623d"],
  [5, "00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab"],
])(
  "should compute hash with complexity=%s",
  (complexity: number, hash) => {
    expect(work(complexity)).toStrictEqual(hash);
  },
);
