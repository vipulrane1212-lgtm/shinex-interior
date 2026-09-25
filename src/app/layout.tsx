import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/common/CustomCursor';
import { ClientLenis } from './ClientLenis';

export const viewport: Viewport = {
  themeColor: '#FBF9F5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ShineX Infra Interior | Precision Turnkey Architecture (Sneha Enterprises)',
  description:
    'High-end turnkey interior atelier benchmarked against European standards. 45-day guaranteed handover backed by a penalty clause, 100% price-lock BOQ, and off-site German Homag CNC fabrication.',
  keywords: [
    'ShineX Infra Interior',
    'Sneha Enterprises',
    'Turnkey Interiors Bangalore',
    'Luxury Modular Kitchens Mumbai',
    '45 Day Handover Guarantee',
    'Architectural BOQ Calculator',
    'German Hardware Interiors',
  ],
  openGraph: {
    title: 'ShineX Infra Interior (Sneha Enterprises) | Master Architectural Atelier',
    description:
      'Turnkey luxury interiors with German precision, 45-day guaranteed handover, and 100% price lock.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Italiana&family=Italianno&family=Outfit:wght@500;600;700;800&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#FBF9F5] text-[#181615] antialiased selection:bg-[#E5D2BA] selection:text-[#181615]">
        <ClientLenis />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
