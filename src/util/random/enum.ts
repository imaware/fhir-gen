/**
 * Returns a random enum value.
 *
 * @param anEnum - An enum to return a random value from.
 *
 * @returns {T} - A randomly selected enum
 */
export const randomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};
