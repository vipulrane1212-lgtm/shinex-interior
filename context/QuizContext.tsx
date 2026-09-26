'use client';

import React, { createContext, useContext, useState } from 'react';

interface QuizContextType {
  isQuizOpen: boolean;
  openQuiz: (initialService?: string) => void;
  closeQuiz: () => void;
  initialService?: string;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [initialService, setInitialService] = useState<string | undefined>(undefined);

  const openQuiz = (service?: string) => {
    setInitialService(service);
    setIsQuizOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };

  return (
    <QuizContext.Provider value={{ isQuizOpen, openQuiz, closeQuiz, initialService }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
