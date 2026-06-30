/**
 * Merge class names conditionally.
 * A minimal utility — replace with `clsx` or `cn` from shadcn if the project grows.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
