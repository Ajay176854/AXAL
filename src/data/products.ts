import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'rectangular',
    name: 'RECTANGULAR CONTAINERS',
    subtitle: '(TRANSPARENT, BLACK, WHITE)',
    colors: ['Transparent', 'Black', 'White'],
    sizes: ['500 ml', '650 ml', '750 ml', '1000 ml', '1500 ml'],
    icon: 'Box',
    sizesLayout: 'single',
  },
  {
    id: 'round',
    name: 'ROUND CONTAINERS',
    subtitle: '(TRANSPARENT, BLACK, WHITE)',
    colors: ['Transparent', 'Black', 'White'],
    sizes: [
      '50 ml',
      '100 ml',
      '200 ml',
      '250 ml',
      '300 ml',
      '500 ml',
      '750 ml',
      '1000 ml',
      '1500 ml',
    ],
    icon: 'Package',
    featured: true,
    sizesLayout: 'grid',
  },
  {
    id: 'juice',
    name: 'JUICE GLASS',
    subtitle: '(TRANSPARENT GLASS & BLACK LID, TRANSPARENT LID & GLASS)',
    colors: ['Transparent Glass & Black Lid', 'Transparent Lid & Glass'],
    sizes: ['300 ml', '350 ml'],
    icon: 'CupSoda',
    sizesLayout: 'single',
  },
];
