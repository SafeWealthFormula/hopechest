import { Question } from '../types/quiz';
export { qqepExtendedQuiz } from './extendedQuestions';

export const quickQuizQuestions: Question[] = [
  {
    id: 'QQ1',
    text: 'If your income stopped tomorrow, how long could you maintain your current lifestyle?',
    type: 'single',
    flagType: 'Income Resilience',
    answers: [
      { id: 'QQ1A1', text: 'More than 6 months—I have a solid safety net', flag: 'Green' },
      { id: 'QQ1A2', text: '3–6 months—I\'d feel some strain but manage', flag: 'Yellow 1' },
      { id: 'QQ1A3', text: '1–3 months—I\'d need to make big adjustments', flag: 'Yellow 2' },
      { id: 'QQ1A4', text: 'Less than 1 month—I\'d need immediate help', flag: 'Red' }
    ]
  },
  {
    id: 'QQ2',
    text: 'How would you handle a $5,000 unexpected expense today?',
    type: 'single',
    flagType: 'Emergency Preparedness',
    answers: [
      { id: 'QQ2A1', text: 'I\'d cover it easily with savings', flag: 'Green' },
      { id: 'QQ2A2', text: 'I\'d manage but feel the pinch', flag: 'Yellow 1' },
      { id: 'QQ2A3', text: 'I\'d need to rely on credit or help from others', flag: 'Yellow 2' },
      { id: 'QQ2A4', text: 'I don\'t know how I\'d handle it right now', flag: 'Red' }
    ]
  },
  {
    id: 'QQ3',
    text: 'What steps have you taken to manage inflation\'s impact on your savings?',
    type: 'single',
    flagType: 'Inflation Awareness',
    answers: [
      { id: 'QQ3A1', text: 'I\'ve made specific adjustments to protect my savings', flag: 'Green' },
      { id: 'QQ3A2', text: 'I\'ve started exploring options but haven\'t done much yet', flag: 'Yellow 1' },
      { id: 'QQ3A3', text: 'I haven\'t adjusted for inflation but know I should', flag: 'Yellow 2' },
      { id: 'QQ3A4', text: 'I\'m not sure how inflation affects my finances', flag: 'Red' }
    ]
  },
  {
    id: 'QQ4',
    text: 'What portion of your monthly income do you save or invest?',
    type: 'single',
    flagType: 'Savings Habits',
    answers: [
      { id: 'QQ4A1', text: 'More than 20%—I\'m building wealth actively', flag: 'Green' },
      { id: 'QQ4A2', text: '10–20%—I\'m making steady progress', flag: 'Yellow 1' },
      { id: 'QQ4A3', text: 'Less than 10%—I\'m working on improving my habits', flag: 'Yellow 2' },
      { id: 'QQ4A4', text: 'None—I\'m focused on paying off debt or covering expenses', flag: 'Red' }
    ]
  },
  {
    id: 'QQ5',
    text: 'How diversified is your investment portfolio?',
    type: 'single',
    flagType: 'Investment Diversification',
    answers: [
      { id: 'QQ5A1', text: 'Very diversified—my investments cover multiple asset types', flag: 'Green' },
      { id: 'QQ5A2', text: 'Moderately diversified—I have some mix, but there\'s room to grow', flag: 'Yellow 1' },
      { id: 'QQ5A3', text: 'Not diversified—I\'m heavily reliant on one area (e.g., stocks)', flag: 'Yellow 2' },
      { id: 'QQ5A4', text: 'I don\'t currently invest', flag: 'Red' }
    ]
  },
  {
    id: 'QQ6',
    text: 'Do you have a plan to reduce taxes on your savings and investments?',
    type: 'single',
    flagType: 'Tax Strategy',
    answers: [
      { id: 'QQ6A1', text: 'Yes, I\'ve optimized my tax strategy effectively', flag: 'Green' },
      { id: 'QQ6A2', text: 'I\'ve started the process but I know there\'s room for improvement', flag: 'Yellow 1' },
      { id: 'QQ6A3', text: 'No, I haven\'t considered how to reduce taxes', flag: 'Yellow 2' },
      { id: 'QQ6A4', text: 'I\'m not sure how taxes affect my savings and investments', flag: 'Red' }
    ]
  },
  {
    id: 'QQ7',
    text: 'Have you calculated how much money you\'ll need to retire comfortably?',
    type: 'single',
    flagType: 'Retirement Goals',
    answers: [
      { id: 'QQ7A1', text: 'Yes, I\'ve calculated my needs and feel I\'m on track', flag: 'Green' },
      { id: 'QQ7A2', text: 'I\'ve done some planning but don\'t have an exact figure yet', flag: 'Yellow 1' },
      { id: 'QQ7A3', text: 'I haven\'t calculated it, but I know it\'s important', flag: 'Yellow 2' },
      { id: 'QQ7A4', text: 'I don\'t know where to start with retirement planning', flag: 'Red' }
    ]
  },
  {
    id: 'QQ8',
    text: 'Do you have a plan to protect your estate and legacy?',
    type: 'single',
    flagType: 'Family Financial Security',
    answers: [
      { id: 'QQ8A1', text: 'I\'ve created a will and trust along with life insurance', flag: 'Green' },
      { id: 'QQ8A2', text: 'I\'ve taken some steps, but I know there\'s more to do', flag: 'Yellow 1' },
      { id: 'QQ8A3', text: 'I rely on life insurance but don\'t have a formal legacy plan', flag: 'Yellow 2' },
      { id: 'QQ8A4', text: 'I haven\'t taken any steps yet to protect my family and legacy', flag: 'Red' }
    ]
  }
];

export const standardQuizQuestions: Question[] = [
  ...quickQuizQuestions,


  {
    id: 'SQQ1',
    text: 'What concerns you most about your finances? (Select up to 2.)',
    type: 'multiple',
    flagType: 'Financial Concerns',
    maxSelections: 2,
    answers: [
      { id: 'SQQ1A1', text: 'Taxes', flag: 'Yellow 1' }, // Maps to QQ6-Yellow 1
      { id: 'SQQ1A2', text: 'Inflation', flag: 'Yellow 2' }, // Maps to QQ3-Yellow 2
      { id: 'SQQ1A3', text: 'Market volatility', flag: 'Yellow 2' }, // Maps to QQ5-Yellow 2
      { id: 'SQQ1A4', text: 'Outliving my savings', flag: 'Red' }, // Maps to QQ7-Red
      { id: 'SQQ1A5', text: 'Protecting my family/legacy', flag: 'Yellow 1' } // Maps to QQ8-Yellow 1
    ]
  },
  {
    id: 'SQQ2',
    text: 'How confident are you in achieving your long-term financial goals?',
    type: 'single',
    flagType: 'Financial Confidence',
    answers: [
      { id: 'SQQ2A1', text: 'Very confident—my plan is solid.', flag: 'Green' }, // Maps to QQ1-Green
      { id: 'SQQ2A2', text: 'Somewhat confident—I need some adjustments.', flag: 'Yellow 1' }, // Maps to QQ1-Yellow 1
      { id: 'SQQ2A3', text: 'Not confident—I need professional guidance.', flag: 'Red' } // Maps to QQ1-Red
    ]
  },
  {
    id: 'SQQ3',
    text: 'If an unexpected expense hit tomorrow, how financially prepared are you?',
    type: 'single',
    flagType: 'Emergency Preparedness',
    answers: [
      { id: 'SQQ3A1', text: 'I have more than 6 months of expenses saved.', flag: 'Green' }, // Maps to QQ2-Green
      { id: 'SQQ3A2', text: 'I have 3–6 months of expenses saved.', flag: 'Yellow 1' }, // Maps to QQ2-Yellow 1
      { id: 'SQQ3A3', text: 'I have less than 3 months saved.', flag: 'Yellow 2' }, // Maps to QQ2-Yellow 2
      { id: 'SQQ3A4', text: 'I don’t have any savings set aside.', flag: 'Red' } // Maps to QQ2-Red
    ]
  },
  {
    id: 'SQQ4',
    text: 'What portion of your income do you save or invest regularly?',
    type: 'single',
    flagType: 'Savings Habits',
    answers: [
      { id: 'SQQ4A1', text: 'More than 15%', flag: 'Green' }, // Maps to QQ4-Green
      { id: 'SQQ4A2', text: '6–15%', flag: 'Yellow 1' }, // Maps to QQ4-Yellow 1
      { id: 'SQQ4A3', text: '0–5%', flag: 'Yellow 2' }, // Maps to QQ4-Yellow 2
      { id: 'SQQ4A4', text: 'I don’t save or invest currently.', flag: 'Red' } // Maps to QQ4-Red
    ]
  },
  {
    id: 'SQQ5',
    text: 'Do you have a trusted financial advisor guiding your strategy?',
    type: 'single',
    flagType: 'Financial Guidance',
    answers: [
      { id: 'SQQ5A1', text: 'Yes, I work with a professional advisor.', flag: 'Green' }, // Maps to QQ6-Green
      { id: 'SQQ5A2', text: 'No, I manage everything myself.', flag: 'Yellow 1' }, // Maps to QQ6-Yellow 1
      { id: 'SQQ5A3', text: 'I rely on informal advice (family/friends).', flag: 'Yellow 2' } // Maps to QQ6-Yellow 2
    ]
  },
  {
    id: 'SQQ6',
    text: 'How diversified is your portfolio across different types of investments?',
    type: 'single',
    flagType: 'Investment Diversification',
    answers: [
      { id: 'SQQ6A1', text: 'Well-diversified (e.g., stocks, bonds, real estate, cash)', flag: 'Green' }, // Maps to QQ5-Green
      { id: 'SQQ6A2', text: 'Partially diversified (e.g., mostly stocks with some bonds or cash)', flag: 'Yellow 1' }, // Maps to QQ5-Yellow 1
      { id: 'SQQ6A3', text: 'Not diversified (e.g., concentrated in one area like stocks)', flag: 'Yellow 2' } // Maps to QQ5-Yellow 2
    ]
  },
  {
    id: 'SQQ7',
    text: 'Which of these tools are part of your financial plan? (Select all that apply.)',
    type: 'multiple',
    flagType: 'Financial Tools',
    answers: [
      { id: 'SQQ7A1', text: '401(k)/403(b) (employer-sponsored retirement accounts)', flag: 'Green' }, // Maps to QQ5-Green
      { id: 'SQQ7A2', text: 'IRA/Roth IRA (individual retirement accounts)', flag: 'Green' }, // Maps to QQ5-Green
      { id: 'SQQ7A3', text: 'Brokerage accounts (non-retirement investments)', flag: 'Yellow 1' }, // Maps to QQ5-Yellow 1
      { id: 'SQQ7A4', text: 'Other (e.g., annuities, alternative investments)', flag: 'Yellow 2' }, // Maps to QQ5-Yellow 2
      { id: 'SQQ7A5', text: 'None of the above', flag: 'Red' } // Maps to QQ5-Red
  ]
  },
  {
    id: 'SQQ8',
    text: 'Do you have a clear understanding of how much money you’ll need to retire comfortably?',
    type: 'single',
    flagType: 'Retirement Planning',
    answers: [
      { id: 'SQQ8A1', text: 'Yes, I’ve calculated it precisely.', flag: 'Green' }, // Maps to QQ7-Green
      { id: 'SQQ8A2', text: 'Not exactly, but I have a rough idea.', flag: 'Yellow 1' }, // Maps to QQ7-Yellow 1
      { id: 'SQQ8A3', text: 'No, I haven’t calculated it yet.', flag: 'Red' } // Maps to QQ7-Red
    ]
  },
  {
    id: 'SQQ9',
    text: 'When do you hope to retire?',
    type: 'single',
    flagType: 'Retirement Goals',
    answers: [
      { id: 'SQQ9A1', text: 'Under 55 (early retirement)', flag: 'Green' }, // Maps to QQ7-Green
      { id: 'SQQ9A2', text: '55–59 (near-early retirement)', flag: 'Yellow 1' }, // Maps to QQ7-Yellow 1
      { id: 'SQQ9A3', text: '60–65 (traditional retirement age)', flag: 'Yellow 2' }, // Maps to QQ7-Yellow 2
      { id: 'SQQ9A4', text: 'Over 65', flag: 'Yellow 2' }, // Maps to QQ7-Yellow 2
      { id: 'SQQ9A5', text: 'I’m not sure yet.', flag: 'Red' } // Maps to QQ7-Red
    ]
  },
  {
    id: 'SQQ10',
    text: 'How prepared are you for major healthcare or long-term care expenses?',
    type: 'single',
    flagType: 'Healthcare Planning',
    answers: [
      { id: 'SQQ10A1', text: 'I have comprehensive coverage, including long-term care.', flag: 'Green' }, // Maps to QQ8-Green
      { id: 'SQQ10A2', text: 'I have basic health insurance but no specific long-term care plan.', flag: 'Yellow 1' }, // Maps to QQ8-Yellow 1
      { id: 'SQQ10A3', text: 'I rely on savings for unexpected costs.', flag: 'Yellow 2' }, // Maps to QQ8-Yellow 2
      { id: 'SQQ10A4', text: 'I haven’t started planning for medical expenses yet.', flag: 'Red' } // Maps to QQ8-Red
    ]
  },
  {
    id: 'SQQ11',
    text: 'What steps have you taken to protect your family and legacy? (Select all that apply.)',
    type: 'multiple',
    flagType: 'Family Protection',
    answers: [
      { id: 'SQQ11A1', text: 'I’ve created a will to outline my wishes.', flag: 'Green' }, // Maps to QQ8-Green
      { id: 'SQQ11A2', text: 'I’ve established a trust to secure asset distribution.', flag: 'Green' }, // Maps to QQ8-Green
      { id: 'SQQ11A3', text: 'I rely on life insurance for financial protection.', flag: 'Yellow 1' }, // Maps to QQ8-Yellow 1
      { id: 'SQQ11A4', text: 'I haven’t taken any steps yet.', flag: 'Red' } // Maps to QQ8-Red
    ]
  },
  {
    id: 'SQQ12',
    text: 'How confident are you that your wealth is protected against inflation?',
    type: 'single',
    flagType: 'Inflation Protection',
    answers: [
      { id: 'SQQ12A1', text: 'I’ve actively invested in inflation-protected strategies.', flag: 'Green' }, // Maps to QQ3-Green
      { id: 'SQQ12A2', text: 'I’m somewhat confident but haven’t specifically addressed inflation.', flag: 'Yellow 1' }, // Maps to QQ3-Yellow 1
      { id: 'SQQ12A3', text: 'I’m not confident; I rely on cash or fixed-income investments.', flag: 'Red' } // Maps to QQ3-Red
    ]
  }
];

