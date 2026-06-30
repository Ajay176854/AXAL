export interface Tag {
  label: string;
  color: 'orange' | 'green' | 'pink' | 'clear' | 'black';
}

export interface Panel {
  num: string;
  title: string;
  body: string;
  tags: Tag[];
}

export interface Chapter {
  id: string;
  number: string;
  label: string;
  headerTitle: string;
  headerDesc: string;
  headerTheme: 'light' | 'dark';
  sectionReverse: boolean;
  canvasBg: string;
  textBg: string;
  framePrefix: string;
  frameCount: number;
  frameExt: string;
  panels: Panel[];
}

export const chapters: Chapter[] = [
  {
    id: 'juice',
    number: '01',
    label: 'Juice Glasses',
    headerTitle: 'Fresh. Sealed. Ready.',
    headerDesc:
      'Three vibrant blends, each with a secure lid — designed for grab-and-go freshness. From mango-passion to berry-citrus, every glass is engineered for shelf appeal and sealing integrity.',
    headerTheme: 'light',
    sectionReverse: false,
    canvasBg: '#f0ede8',
    textBg: '#faf8f5',
    framePrefix: '/frames/juice/frame-',
    frameCount: 60,
    frameExt: 'jpg',
    panels: [
      {
        num: 'The Lineup',
        title: 'Three blends, one table',
        body: 'Mango-passion, green-detox, and berry-citrus arranged on a terrazzo surface, shot head-on to emphasise the sealed lid geometry.',
        tags: [
          { label: '300 ml', color: 'orange' },
          { label: '350 ml', color: 'green' },
          { label: 'Transparent', color: 'clear' },
        ],
      },
      {
        num: 'Side Profile',
        title: 'Clarity in cross-section',
        body: 'A single glass turned 90° to show wall thickness, base contour, and the snap-fit lid locking ring. The transparent body lets you gauge fill level at a glance.',
        tags: [
          { label: 'Snap-fit Lid', color: 'pink' },
          { label: 'BPA Free', color: 'green' },
        ],
      },
      {
        num: 'Overhead',
        title: 'Lid detail from above',
        body: 'Bird\'s-eye view of the circular lid — concentric ribs for grip, tamper-evident pull tab, and printed branding zone. Designed for single-hand opening.',
        tags: [
          { label: 'Tamper Evident', color: 'orange' },
          { label: 'Stackable', color: 'clear' },
        ],
      },
      {
        num: 'Close-Up',
        title: 'The seal that matters',
        body: 'Macro shot of the lid-to-body junction. The silicone gasket creates an airtight barrier that keeps contents fresh for 72 hours under refrigeration.',
        tags: [
          { label: '72h Fresh', color: 'green' },
          { label: 'Food Grade', color: 'pink' },
        ],
      },
    ],
  },
  {
    id: 'round',
    number: '02',
    label: 'Round Containers',
    headerTitle: 'Engineered. Versatile. Stacked.',
    headerDesc:
      'Nine sizes from 50 ml to 1500 ml, available in transparent, black, and white. The round profile optimises material usage, stacking efficiency, and portion control across food-service and retail.',
    headerTheme: 'dark',
    sectionReverse: true,
    canvasBg: '#1a1a1a',
    textBg: '#111111',
    framePrefix: '/frames/round/frame-',
    frameCount: 60,
    frameExt: 'jpg',
    panels: [
      {
        num: 'Range Overview',
        title: 'Nine sizes, one system',
        body: 'From 50 ml sauce cups to 1500 ml meal bowls — the entire round range shares a single lid diameter progression, cutting SKU complexity for operators.',
        tags: [
          { label: '50–1500 ml', color: 'orange' },
          { label: '3 Colors', color: 'clear' },
        ],
      },
      {
        num: 'Nesting',
        title: 'Stacks that save space',
        body: 'Tapered walls allow empty containers to nest at a 6° draft angle. A pallet of 1000 ml rounds occupies 40% less warehouse volume than straight-wall alternatives.',
        tags: [
          { label: '6° Draft', color: 'green' },
          { label: 'Space Saver', color: 'pink' },
        ],
      },
      {
        num: 'Lid Lock',
        title: 'Audible click, visible seal',
        body: 'The peripheral rim snaps into a recessed channel with a tactile click. An unbroken tamper band confirms first-open status for food-safety compliance.',
        tags: [
          { label: 'Click-Lock', color: 'orange' },
          { label: 'HACCP Ready', color: 'green' },
        ],
      },
      {
        num: 'Material',
        title: 'PP that performs',
        body: 'Injection-moulded polypropylene rated to −20 °C (freezer) and +120 °C (microwave reheat). Crystal-clear transparency on the natural variant; deep-black and matte-white on colour options.',
        tags: [
          { label: 'Freezer Safe', color: 'clear' },
          { label: 'Microwave OK', color: 'black' },
        ],
      },
    ],
  },
  {
    id: 'rect',
    number: '03',
    label: 'Rectangular Containers',
    headerTitle: 'Modular. Meal-Ready. Modern.',
    headerDesc:
      'Five capacities from 500 ml to 1500 ml in transparent, black, and white. The rectangular footprint maximises tray coverage and portion architecture for meal-prep, catering, and retail.',
    headerTheme: 'light',
    sectionReverse: false,
    canvasBg: '#f0ede8',
    textBg: '#faf8f5',
    framePrefix: '/frames/rect/frame-',
    frameCount: 60,
    frameExt: 'jpg',
    panels: [
      {
        num: 'Line-Up',
        title: 'Five formats, zero wasted space',
        body: 'From the 500 ml snack box to the 1500 ml family tray — every size shares the same width, so they tile on shelves and in delivery bags without gaps.',
        tags: [
          { label: '500–1500 ml', color: 'orange' },
          { label: 'Tiling Design', color: 'green' },
        ],
      },
      {
        num: 'Cross-Section',
        title: 'Corners that don\'t compromise',
        body: 'Radiused internal corners prevent food packing in dead zones, while sharp external corners maximise shelf footprint. Wall thickness: 0.5 mm ± 0.03 mm.',
        tags: [
          { label: '0.5 mm Wall', color: 'pink' },
          { label: 'Precision', color: 'clear' },
        ],
      },
      {
        num: 'Compartments',
        title: 'Divide and conquer',
        body: 'Optional snap-in dividers split the 1000 ml and 1500 ml variants into 2- or 3-compartment configurations — no separate SKU needed.',
        tags: [
          { label: 'Modular', color: 'orange' },
          { label: '2–3 Comp', color: 'green' },
        ],
      },
      {
        num: 'Stack Test',
        title: 'Built for the supply chain',
        body: '12 kg top-load tested. The peripheral rim interlocks with the base of the container above, preventing lateral shift during transport.',
        tags: [
          { label: '12 kg Rated', color: 'black' },
          { label: 'Interlock', color: 'pink' },
        ],
      },
    ],
  },
];
