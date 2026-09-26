import type { Metadata } from 'next';
import { Cormorant_Garamond, Pinyon_Script, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { TrackProvider } from '@/context/TrackContext';
import { QuizProvider } from '@/context/QuizContext';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import QuotationTrapModal from '@/components/quiz/QuotationTrapModal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShineX Infra Interior | Architecture, Luxury Interiors & Civil Contracting',
  description:
    'ShineX Infra Interior — Premium residential interior architecture and industrial civil contracting for Mumbai & Navi Mumbai. Backed by Sneha Enterprises.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${pinyon.variable} ${jakarta.variable}`}
    >
      <body className="bg-ink text-plaster font-sans antialiased selection:bg-gold selection:text-white">
        <TrackProvider>
          <QuizProvider>
            <SmoothScrollProvider>
              {children}
              <QuotationTrapModal />
            </SmoothScrollProvider>
          </QuizProvider>
        </TrackProvider>
      </body>
    </html>
  );
}
