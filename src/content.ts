/**
 * All site copy and portfolio data lives here.
 * Replace placeholder text and add real photos (put them in /public/works and
 * reference them as "/works/<file>.jpg"). Any item without a `src` renders an
 * elegant line-art placeholder instead.
 */

export type WorkCategory = 'brows' | 'lips' | 'eyeliner' | 'correction';

export interface Work {
  id: string;
  title: string;
  category: WorkCategory;
  technique: string;
  /** Healed result (shown ~6 weeks after the procedure). */
  healed: boolean;
  /** Path to the "after" photo. */
  after?: string;
  /** Optional "before" photo; enables the comparison slider. */
  before?: string;
  /** Hue (0–360) used for the placeholder tint. */
  tone: number;
  shape: 'portrait' | 'square' | 'landscape';
}

export interface Service {
  id: string;
  name: string;
  category: WorkCategory;
  description: string;
  duration: string;
  priceFrom: number;
  touchUp: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const artist = {
  name: 'Alina',
  title: 'Permanent Makeup Artist',
  city: 'Sacramento, CA',
  yearsExperience: 9,
  clients: 2400,
  certifications: 6,
  bio: [
    'I started in classical portrait painting, and it still shapes how I work: light, proportion, and restraint. Every face has its own architecture. My job is to bring it out, not to cover it up.',
    'Since 2017 I have specialized in soft, healed-natural permanent makeup. I train under international masters every year and use only certified, vegan pigments.',
  ],
  contact: {
    email: 'hello@alina.studio',
    phone: '(916) 555-0100',
    instagram: 'https://instagram.com/alina.pmu',
    instagramHandle: '@alina.pmu',
    address: '0000 J Street, Sacramento, CA 95816',
    hours: 'Tue–Sat · 10 AM–7 PM',
    bookingUrl: 'sms:+19165550100',
  },
} as const;

export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const categoryLabels: Record<WorkCategory, string> = {
  brows: 'Brows',
  lips: 'Lips',
  eyeliner: 'Eyeliner',
  correction: 'Corrections',
};

export const services: Service[] = [
  {
    id: 'microblading',
    name: 'Microblading',
    category: 'brows',
    description:
      'Hand-drawn, hair-like strokes that add density and shape while keeping your brows soft and natural.',
    duration: '2.5 h',
    priceFrom: 420,
    touchUp: 'Touch-up at 6 weeks included',
  },
  {
    id: 'powder-brows',
    name: 'Powder & Ombré Brows',
    category: 'brows',
    description:
      'A misty, makeup-like finish that fades gently from the front of the brow to the tail. Lasts 2–3 years.',
    duration: '2.5 h',
    priceFrom: 450,
    touchUp: 'Touch-up at 6 weeks included',
  },
  {
    id: 'lip-blush',
    name: 'Lip Blush',
    category: 'lips',
    description:
      'Restores color and definition, evens out asymmetry, and leaves a fresh, just-bitten tint.',
    duration: '3 h',
    priceFrom: 480,
    touchUp: 'Touch-up at 8 weeks included',
  },
  {
    id: 'lash-line',
    name: 'Lash Line & Eyeliner',
    category: 'eyeliner',
    description:
      'From an invisible lash enhancement to a soft smoky wing. Your eyes look defined when you wake up.',
    duration: '2 h',
    priceFrom: 360,
    touchUp: 'Touch-up at 6 weeks included',
  },
  {
    id: 'correction',
    name: 'Correction & Color Repair',
    category: 'correction',
    description:
      'Neutralizing red, gray or blue undertones from old work, and reshaping it into something you love again.',
    duration: 'from 2 h',
    priceFrom: 380,
    touchUp: 'Plan set at consultation',
  },
];

export const works: Work[] = [
  { id: 'w1', title: 'Soft powder brows', category: 'brows', technique: 'Ombré', healed: true, tone: 24, shape: 'portrait' },
  { id: 'w2', title: 'Natural lip blush', category: 'lips', technique: 'Aquarelle', healed: true, tone: 6, shape: 'square' },
  { id: 'w3', title: 'Hair-stroke brows', category: 'brows', technique: 'Microblading', healed: false, tone: 30, shape: 'landscape' },
  { id: 'w4', title: 'Smoky lash line', category: 'eyeliner', technique: 'Shaded liner', healed: true, tone: 18, shape: 'square' },
  { id: 'w5', title: 'Warm-tone correction', category: 'correction', technique: 'Neutralization', healed: true, tone: 12, shape: 'portrait' },
  { id: 'w6', title: 'Combo brows', category: 'brows', technique: 'Strokes + shading', healed: true, tone: 28, shape: 'square' },
  { id: 'w7', title: 'Rosé lip contour', category: 'lips', technique: 'Full blush', healed: false, tone: 352, shape: 'portrait' },
  { id: 'w8', title: 'Invisible lash line', category: 'eyeliner', technique: 'Lash enhancement', healed: true, tone: 22, shape: 'landscape' },
  { id: 'w9', title: 'Brow reshaping', category: 'correction', technique: 'Cover + powder', healed: true, tone: 20, shape: 'square' },
];

export const process = [
  {
    title: 'Consultation',
    text: 'We talk through your lifestyle, skin type and the look you want. Then we choose the technique and shade together.',
  },
  {
    title: 'Design & mapping',
    text: 'I measure and sketch the shape directly on your face. Nothing is pigmented until you love it in the mirror.',
  },
  {
    title: 'Procedure',
    text: 'Topical numbing, sterile single-use tools, and a calm, unhurried session. Most clients say it feels like light scratching.',
  },
  {
    title: 'Healing & perfecting',
    text: 'You get a detailed aftercare kit. At the touch-up I refine the color and details for a flawless healed result.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Nobody can tell my brows are tattooed. They just think I finally found a good brow pencil. I wake up looking like myself, only more rested.',
    name: 'Marie K.',
    service: 'Powder brows',
  },
  {
    quote:
      'Alina fixed old work from another studio that had turned gray. I was nervous, but she was so patient. The result is beyond what I hoped for.',
    name: 'Sofia R.',
    service: 'Correction',
  },
  {
    quote:
      'The lip blush gave me back color I lost years ago. Subtle, fresh, and healed perfectly even.',
    name: 'Johanna L.',
    service: 'Lip blush',
  },
  {
    quote:
      'The studio is calm and spotless, and the mapping took as long as I needed. You can tell she is an artist.',
    name: 'Leonie W.',
    service: 'Microblading',
  },
];

export const faqs: Faq[] = [
  {
    question: 'Does it hurt?',
    answer:
      'I use professional topical anesthetics before and during the procedure. Most clients rate it 2–3 out of 10. It is often compared to light scratching.',
  },
  {
    question: 'How long does permanent makeup last?',
    answer:
      'Usually 1.5–3 years depending on technique, skin type and lifestyle. A yearly color refresh keeps it looking crisp.',
  },
  {
    question: 'What does healing look like?',
    answer:
      'For the first 5–7 days the color looks darker and bolder, then it softens. The final healed result shows at around 4–6 weeks, which is when we do the touch-up.',
  },
  {
    question: 'Who should not get PMU?',
    answer:
      'It is not recommended during pregnancy or breastfeeding, during chemotherapy, with active skin conditions in the area, or while using isotretinoin. We will go over everything at the consultation.',
  },
  {
    question: 'How do I prepare?',
    answer:
      'Avoid alcohol, caffeine and blood thinners for 24 hours, and skip retinol or peels in the area for two weeks. For lips, a cold-sore preventive may be advised.',
  },
];

export const navLinks = [
  { href: '#work', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
] as const;
