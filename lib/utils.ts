import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  // Format time to HH:MM AM/PM
  const timeString = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  // Calculate days difference
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Generate relative day string
  if (diffDays === 0) {
    return `at ${timeString}`;
  } else if (diffDays === 1) {
    return `Yesterday, ${timeString}`;
  } else {
    return `${diffDays}d ago, ${timeString}`;
  }
}