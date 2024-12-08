import { create } from 'zustand';
import { QuizType, QuizView, UserAnswer, QuizFlag } from '../types/quiz';

interface QuizState {
  view: QuizView;
  quizType: QuizType;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  currentQQEPFlag: QuizFlag | null;
  abTestVariant: 'A' | 'B' | 'C';
  isKeyboardNavigation: boolean;
  setView: (view: QuizView) => void;
  setQuizType: (type: QuizType) => void;
  setAnswer: (answer: UserAnswer) => void;
  nextQuestion: () => void;
  startQuiz: () => void;
  cycleVariant: () => void;
  setKeyboardNavigation: (value: boolean) => void;
  setQQEPFlag: (flag: QuizFlag) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  // Initial state
  view: 'landing',
  quizType: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  currentQQEPFlag: null,
  abTestVariant: 'A',
  isKeyboardNavigation: false,

  setView: (view) => set({ view }),

  setQuizType: (type) => set({ 
    quizType: type,
    currentQuestionIndex: 0,
    userAnswers: [],
    currentQQEPFlag: null
  }),

  setAnswer: (answer) => set((state) => ({
    userAnswers: [...state.userAnswers, answer]
  })),

  nextQuestion: () => set((state) => {
    const nextIndex = state.currentQuestionIndex + 1;
    
    if (state.quizType === 'quick') {
      if (nextIndex >= 8) {
        return { 
          view: 'expansion',
          currentQuestionIndex: 0 
        };
      }
    } else if (state.quizType === 'standard') {
      if (nextIndex >= 12) {
        return { 
          view: 'lead-capture',
          currentQuestionIndex: 0 
        };
      }
    } else if (state.quizType === 'extended') {
      // Extended quiz navigation is handled by useExtendedQuiz hook
      return { currentQuestionIndex: nextIndex };
    }
    
    return { currentQuestionIndex: nextIndex };
  }),

  startQuiz: () => set({
    view: 'quiz-selection',
    quizType: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    currentQQEPFlag: null
  }),

  cycleVariant: () => set((state) => ({
    abTestVariant: state.abTestVariant === 'A' ? 'B' : 
                   state.abTestVariant === 'B' ? 'C' : 'A'
  })),

  setKeyboardNavigation: (value) => set({ isKeyboardNavigation: value }),

  setQQEPFlag: (flag) => set({ currentQQEPFlag: flag }),

  resetQuiz: () => set({
    view: 'landing',
    quizType: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    currentQQEPFlag: null,
    abTestVariant: 'A',
    isKeyboardNavigation: false
  })
}));