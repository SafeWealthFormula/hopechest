import { useState } from 'react';
import { Check } from 'lucide-react';
import { Question, UserAnswer } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface QuestionCardProps {
  question: Question;
  onAnswerSubmit?: () => void;
}

export function QuestionCard({ question, onAnswerSubmit }: QuestionCardProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { setAnswer, nextQuestion } = useQuizStore();

  const handleAnswerSelect = (answerId: string) => {
    if (question.type === 'single') {
      setSelectedAnswers([answerId]);
      setError(null);
      
      const answer: UserAnswer = {
        questionId: question.id,
        answerId: [answerId]
      };
      
      setAnswer(answer);
      if (onAnswerSubmit) {
        onAnswerSubmit();
      } else {
        nextQuestion();
      }
    } else {
      setSelectedAnswers(prev => {
        if (prev.includes(answerId)) {
          return prev.filter(id => id !== answerId);
        }
        
        if (question.maxSelections && prev.length >= question.maxSelections) {
          setError(`Please select up to ${question.maxSelections} options`);
          return prev;
        }
        
        setError(null);
        return [...prev, answerId];
      });
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
      setError('Please select at least one option');
      return;
    }
    
    const answer: UserAnswer = {
      questionId: question.id,
      answerId: selectedAnswers
    };
    
    setAnswer(answer);
    if (onAnswerSubmit) {
      onAnswerSubmit();
    } else {
      nextQuestion();
    }
  };

  if (!question.answers) return null;

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong border border-white/10">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
        {question.text}
      </h2>
      
      {question.maxSelections && (
        <p className="text-sm text-gray-600 mb-4">
          Select up to {question.maxSelections} options
        </p>
      )}
      
      <div className="space-y-3">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => handleAnswerSelect(answer.id)}
            className={`group w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
              selectedAnswers.includes(answer.id)
                ? 'border-emerald-600 bg-emerald-50 shadow-lg'
                : 'border-gray-200 hover:border-emerald-600 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-base ${
                selectedAnswers.includes(answer.id)
                  ? 'text-emerald-700'
                  : 'text-gray-700'
              }`}>
                {answer.text}
              </span>
              {selectedAnswers.includes(answer.id) && (
                <Check className="h-5 w-5 text-emerald-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-500">
          {error}
        </p>
      )}

      {question.type === 'multiple' && (
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers.length === 0}
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}