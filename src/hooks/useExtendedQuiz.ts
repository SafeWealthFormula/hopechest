import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '../store/quizStore';
import { ExtendedQuestion } from '../types/quiz';
import { qqepExtendedQuiz } from '../data/extendedQuestions';

export function useExtendedQuiz() {
  const { currentQQEPFlag, setView } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState<ExtendedQuestion | null>(null);
  const [questionType, setQuestionType] = useState<'primary' | 'secondary'>('primary');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find relevant questions based on flag
  const findRelevantQuestions = useCallback(() => {
    if (!currentQQEPFlag) return [];
    return qqepExtendedQuiz.filter(q => 
      q.id.includes(currentQQEPFlag) || q.id.includes('All-Users')
    );
  }, [currentQQEPFlag]);

  useEffect(() => {
    const relevantQuestions = findRelevantQuestions();
    if (relevantQuestions.length > 0) {
      setCurrentQuestion(relevantQuestions[0]);
      setQuestionType('primary');
      setCurrentIndex(0);
    } else {
      setCurrentQuestion(null);
    }
  }, [currentQQEPFlag, findRelevantQuestions]);

  const nextQuestion = useCallback(() => {
    if (!currentQuestion) return;

    // If there's a secondary question and we're on primary, show it
    if (questionType === 'primary' && currentQuestion.secondaryQuestion) {
      setQuestionType('secondary');
      return;
    }

    // Otherwise, find the next question
    const relevantQuestions = findRelevantQuestions();
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < relevantQuestions.length) {
      setCurrentQuestion(relevantQuestions[nextIndex]);
      setQuestionType('primary');
      setCurrentIndex(nextIndex);
    } else {
      // No more questions for this flag
      setCurrentQuestion(null);
      setView('lead-capture');
    }
  }, [currentQuestion, questionType, currentIndex, findRelevantQuestions, setView]);

  return {
    currentQuestion,
    questionType,
    nextQuestion,
    isComplete: !currentQuestion
  };
}