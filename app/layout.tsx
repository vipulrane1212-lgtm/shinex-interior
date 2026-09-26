import type { Metadata } from 'next';
import './globals.css';
import { TrackProvider } from '@/context/TrackContext';
import { QuizProvider } from '@/context/QuizContext';
import QuotationTrapModal from '@/components/quiz/QuotationTrapModal';

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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-ink text-plaster antialiased selection:bg-gold selection:text-ink">
        <TrackProvider>
          <QuizProvider>
            {children}
            <QuotationTrapModal />
          </QuizProvider>
        </TrackProvider>
      </body>
    </html>
  );
}
