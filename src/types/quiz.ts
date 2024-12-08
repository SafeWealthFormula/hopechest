export type QuizType = 'quick' | 'standard' | 'extended' | null;

export type QuizView = 
  | 'landing'
  | 'quiz-selection'
  | 'quiz'
  | 'loading'
  | 'expansion'
  | 'extended-quiz'
  | 'lead-capture'
  | 'results'
  | 'thank-you';

export type QuizFlag = 'Green' | 'Yellow 1' | 'Yellow 2' | 'Red';

export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple';
  maxSelections?: number;
  answers: Answer[];
  flag?: QuizFlag;
  flagType?: string;
}

export interface Answer {
  id: string;
  text: string;
  flag?: QuizFlag;
}

export interface UserAnswer {
  questionId: string;
  answerId: string[];
}

export interface ExtendedQuestion extends Question {
  primaryQuestion?: string;
  primaryAnswers?: Answer[];
  secondaryQuestion?: string;
  secondaryAnswers?: Answer[];
  additionalQuestion?: string;
  additionalAnswers?: Answer[];
}

export interface QuizProgress {
  currentTag: string;
  currentQuestionType: 'primary' | 'secondary' | 'additional';
  completedTags: string[];
}

export interface QuizState {
  view: QuizView;
  quizType: QuizType;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  currentQQEPFlag: string | null;
  abTestVariant: 'A' | 'B' | 'C';
  isKeyboardNavigation: boolean;
  quizProgress: QuizProgress;
}