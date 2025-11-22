type ClassDictionary = Record<
  string,
  boolean | string | number | null | undefined
>;
type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassValue[]
  | null
  | false
  | undefined;

const toClassName = (value: ClassValue): string => {
  if (!value) {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toClassName).filter(Boolean).join(" ");
  }

  return Object.entries(value as ClassDictionary)
    .filter(([, condition]) => Boolean(condition))
    .map(([className]) => className)
    .join(" ");
};

export const cn = (...inputs: ClassValue[]): string =>
  inputs.map(toClassName).filter(Boolean).join(" ");
