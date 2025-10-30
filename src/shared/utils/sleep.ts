// A helper to simulate delays (useful for testing async thunks or UI feedback).

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

await sleep(1000);