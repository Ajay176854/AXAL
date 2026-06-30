export interface Product {
  id: string;
  name: string;
  subtitle: string;
  colors: string[];
  sizes: string[];
  icon: 'Box' | 'Package' | 'CupSoda';
  /** Whether this card should be visually elevated (e.g., the "featured" middle card). */
  featured?: boolean;
  /** Layout mode for the sizes list. */
  sizesLayout?: 'single' | 'grid';
}
