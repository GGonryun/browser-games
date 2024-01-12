export function maskStringExceptLastN(input: string, n: number): string {
  if (!input) return input;
  if (input.length < n) return input;
  const maskedLength = input.length - n;
  const maskedString = '*'.repeat(maskedLength);
  const lastFiveCharacters = input.slice(-n);
  return maskedString + lastFiveCharacters;
}

// upper case the first letter of a string
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function uppercase(string: string) {
  return string.toUpperCase();
}
