import { useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { useQuizStore } from '../../store/quizStore';
import { useExtendedQuiz } from '../../hooks/useExtendedQuiz';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';

export function ExtendedQuizView() {
  const { setView, currentQQEPFlag } = useQuizStore();
  const { currentQuestion, questionType, nextQuestion, isComplete } = useExtendedQuiz();

  useEffect(() => {
    if (isComplete) {
      setView('lead-capture');
    }
  }, [isComplete, setView]);

  if (!currentQuestion) return null;

  const question = {
    ...currentQuestion,
    text: questionType === 'primary' ? 
      currentQuestion.primaryQuestion || '' : 
      currentQuestion.secondaryQuestion || '',
    answers: questionType === 'primary' ? 
      currentQuestion.primaryAnswers?.map(a => ({ ...a, id: a.id || Math.random().toString() })) || [] : 
      currentQuestion.secondaryAnswers?.map(a => ({ ...a, id: a.id || Math.random().toString() })) || []
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <header className="py-3 px-4 border-b border-emerald-700/30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-200" />
            <span className="text-emerald-100 text-sm font-medium">Extended Assessment</span>
          </div>
          <span className="text-emerald-200 text-sm font-medium">
            {currentQQEPFlag} Assessment
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong border border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {question.text}
            </h2>
            
            <div className="space-y-3">
              {question.answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() => nextQuestion()}
                  className="group w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-emerald-600 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-base text-gray-700">
                      {answer.text}
                    </span>
                    <ArrowRight className="h-4 w-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-3 px-4 border-t border-emerald-700/30">
        <div className="max-w-2xl mx-auto">
          <ProgressBar 
            current={questionType === 'secondary' ? 2 : 1} 
            total={currentQuestion.secondaryQuestion ? 2 : 1} 
          />
        </div>
      </footer>
    </div>
  );
}