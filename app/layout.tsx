import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { TrackProvider } from '@/context/TrackContext';
import { QuizProvider } from '@/context/QuizContext';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import QuotationTrapModal from '@/components/quiz/QuotationTrapModal';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
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
      className={`${outfit.variable} ${jakarta.variable}`}
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
