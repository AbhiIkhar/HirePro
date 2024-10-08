import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Combining the classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
