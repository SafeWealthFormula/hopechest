import { ExtendedQuestion } from '../types/quiz';

export const qqepExtendedQuiz: ExtendedQuestion[] = [
 {
    id: 'QQEP1-Green',
    flagType: 'Income Resilience',
    type: 'multiple',
    primaryQuestion: 'How do you plan to optimize your safety net to grow your wealth long term?',
    primaryAnswers: [
      { id: 'QQEP1G-P1', text: 'I’m exploring ways to balance liquidity with higher returns on savings.', flag: 'Green' },
      { id: 'QQEP1G-P2', text: 'I’m focused on aligning my safety net with my future retirement goals.', flag: 'Green' },
      { id: 'QQEP1G-P3', text: 'I prefer a highly secure safety net and don’t feel the need to optimize further.', flag: 'Green' },
      { id: 'QQEP1G-P4', text: 'I haven’t thought about optimizing my safety net beyond its current setup.', flag: 'Green' }
    ],
    secondaryQuestion: 'What’s the most important feature of your financial safety net?',
    secondaryAnswers: [
      { id: 'QQEP1G-S1', text: 'Ensuring it grows steadily over time while remaining secure.', flag: 'Green' },
      { id: 'QQEP1G-S2', text: 'Maintaining easy access for emergencies without compromising growth.', flag: 'Green' },
      { id: 'QQEP1G-S3', text: 'Minimizing risks while exploring new opportunities for diversification.', flag: 'Green' },
      { id: 'QQEP1G-S4', text: 'My savings doesn’t do any of those things.', flag: 'Green' }
    ]
  },
  {
    id: 'QQEP1-Yellow1',
    flagType: 'Income Resilience',
    type: 'multiple',
    primaryQuestion: 'What adjustments would help you feel more prepared for unexpected financial disruptions?',
    primaryAnswers: [
      { id: 'QQEP1Y1-P1', text: 'Finding ways to grow my savings while keeping them accessible.', flag: 'Yellow 1' },
      { id: 'QQEP1Y1-P2', text: 'Adding strategies to handle simultaneous challenges (e.g., health and income loss).', flag: 'Yellow 1' },
      { id: 'QQEP1Y1-P3', text: 'Creating a backup plan to protect my savings.', flag: 'Yellow 1' },
      { id: 'QQEP1Y1-P4', text: 'I’m confident my savings are sufficient.', flag: 'Yellow 1' }
    ]
  },
  {
    id: 'QQEP1-Yellow2',
    flagType: 'Income Resilience',
    type: 'multiple',
    primaryQuestion: 'What steps could help you feel more secure if your income were disrupted for an extended period?',
    primaryAnswers: [
      { id: 'QQEP1Y2-P1', text: 'Building a larger savings cushion to cover several months of expenses.', flag: 'Yellow 2' },
      { id: 'QQEP1Y2-P2', text: 'Finding ways to reduce my reliance on a single income source.', flag: 'Yellow 2' },
      { id: 'QQEP1Y2-P3', text: 'Exploring financial tools to provide stability during disruptions.', flag: 'Yellow 2' },
      { id: 'QQEP1Y2-P4', text: 'I’m not sure, but having more than a few months’ income saved up seems wise.', flag: 'Yellow 2' }
    ]
  },
  {
    id: 'QQEP1-Red',
    flagType: 'Income Resilience',
    type: 'multiple',
    primaryQuestion: 'What would give you the most confidence in handling a long-term income disruption?',
    primaryAnswers: [
      { id: 'QQEP1R-P1', text: 'Knowing I have resources that grow even when I’m not earning.', flag: 'Red' },
      { id: 'QQEP1R-P2', text: 'Feeling assured my savings could cover a long-term challenge without running out.', flag: 'Red' },
      { id: 'QQEP1R-P3', text: 'Having a backup plan that doesn’t rely solely on savings.', flag: 'Red' },
      { id: 'QQEP1R-P4', text: 'Knowing there are strategies I can use to strengthen my financial safety net.', flag: 'Red' }
    ],
    secondaryQuestion: 'What’s been your biggest challenge(s) in creating a financial safety net?',
    secondaryAnswers: [
      { id: 'QQEP1R-S1', text: 'I don’t have extra income to save right now.', flag: 'Red' },
      { id: 'QQEP1R-S2', text: 'I’m unsure how to prioritize savings while managing expenses.', flag: 'Red' },
      { id: 'QQEP1R-S3', text: 'I’ve struggled to stay consistent with saving.', flag: 'Red' },
      { id: 'QQEP1R-S4', text: 'I haven’t started thinking about it seriously yet.', flag: 'Red' }
    ]
  },
  {
    id: 'QQEP2-Green',
    flagType: 'Emergency Preparedness',
    type: 'multiple',
    primaryQuestion: 'What strategies do you use to ensure your emergency fund keeps pace with your financial goals?',
    primaryAnswers: [
      { id: 'QQEP2G-P1', text: 'I adjust it annually to reflect my lifestyle and inflation.', flag: 'Green' },
      { id: 'QQEP2G-P2', text: 'I keep a portion of my fund in investments that offer low risk and higher returns.', flag: 'Green' },
      { id: 'QQEP2G-P3', text: 'I use my emergency fund solely for emergencies and focus growth elsewhere.', flag: 'Green' },
      { id: 'QQEP2G-P4', text: 'To be honest I don’t pay too close attention to it.', flag: 'Green' }
    ],
    secondaryQuestion: 'Have you considered optimizing your emergency fund for a broader wealth-building strategy?',
    secondaryAnswers: [
      { id: 'QQEP2G-S1', text: 'Yes, I’m actively exploring how to make it more efficient.', flag: 'Green' },
      { id: 'QQEP2G-S2', text: 'No, I prefer to keep my emergency fund separate and secure.', flag: 'Green' },
      { id: 'QQEP2G-S3', text: 'I’m curious about strategies that would integrate effectively without losing liquidity.', flag: 'Green' },
      { id: 'QQEP2G-S4', text: 'My emergency fund works as it is, and I don’t see the need for changes.', flag: 'Green' }
    ]
  },
  {
    id: 'QQEP2-Yellow1',
    flagType: 'Emergency Preparedness',
    type: 'multiple',
    primaryQuestion: 'What would give you more confidence in your ability to handle unexpected expenses?',
    primaryAnswers: [
      { id: 'QQEP2Y1-P1', text: 'Having a backup strategy that doesn’t rely solely on savings.', flag: 'Yellow 1' },
      { id: 'QQEP2Y1-P2', text: 'Knowing my emergency fund could grow without locking up my cash.', flag: 'Yellow 1' },
      { id: 'QQEP2Y1-P3', text: 'Understanding how to handle multiple unexpected expenses at once.', flag: 'Yellow 1' },
      { id: 'QQEP2Y1-P4', text: 'Exploring better ways to balance emergency preparedness with other financial goals.', flag: 'Yellow 1' }
    ]
  },
  {
    id: 'QQEP2-Yellow2',
    flagType: 'Emergency Preparedness',
    type: 'multiple',
    primaryQuestion: 'What’s preventing you from creating a more reliable financial cushion for emergencies?',
    primaryAnswers: [
      { id: 'QQEP2Y2-P1', text: 'I struggle to balance saving with other financial priorities.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-P2', text: 'I don’t know where to start building a safety net.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-P3', text: 'Unexpected expenses keep draining my savings.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-P4', text: 'I haven’t found a strategy that works for my situation.', flag: 'Yellow 2' }
    ],
    secondaryQuestion: 'What would give you the most confidence in your ability to handle emergencies without outside help?',
    secondaryAnswers: [
      { id: 'QQEP2Y2-S1', text: 'Having a step-by-step plan to build and protect my emergency fund.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-S2', text: 'Learning strategies to grow my savings while keeping them accessible.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-S3', text: 'Understanding how to prevent unexpected expenses from disrupting my finances.', flag: 'Yellow 2' },
      { id: 'QQEP2Y2-S4', text: 'Having enough saved that I could cover even a small emergency without going into debt.', flag: 'Yellow 2' }
    ]
  },
  {
    id: 'QQEP2-Red',
    flagType: 'Emergency Preparedness',
    type: 'multiple',
    primaryQuestion: 'What would a reliable emergency plan look like for you?',
    primaryAnswers: [
      { id: 'QQEP2R-P1', text: 'Having a dedicated emergency fund I can depend on.', flag: 'Red' },
      { id: 'QQEP2R-P2', text: 'Knowing I wouldn’t need to rely on credit or loans during emergencies.', flag: 'Red' },
      { id: 'QQEP2R-P3', text: 'Having savings that could handle both small and large unexpected costs.', flag: 'Red' },
      { id: 'QQEP2R-P4', text: 'I’m not sure, but learning how to build an emergency plan would help.', flag: 'Red' }
    ],
    secondaryQuestion: 'What’s your biggest concern about not having an emergency plan?',
    secondaryAnswers: [
      { id: 'QQEP2R-S1', text: 'Relying too much on credit or loans.', flag: 'Red' },
      { id: 'QQEP2R-S2', text: 'Not knowing how to prioritize savings.', flag: 'Red' },
      { id: 'QQEP2R-S3', text: 'Facing financial instability during emergencies.', flag: 'Red' },
      { id: 'QQEP2R-S4', text: 'Not having a clear way to start building an emergency fund.', flag: 'Red' }
    ]
  },
  {
    id: 'QQEP3-Green',
    flagType: 'Inflation Awareness',
    type: 'multiple',
    primaryQuestion: 'What’s your approach for balancing inflation protection with growth opportunities?',
    primaryAnswers: [
      { id: 'QQEP3G-P1', text: 'I invest in inflation-protected securities and real assets.', flag: 'Green' },
      { id: 'QQEP3G-P2', text: 'I diversify my savings into a mix of secure and growth-oriented accounts.', flag: 'Green' },
      { id: 'QQEP3G-P3', text: 'I’ve focused on optimizing specific assets to perform in high-inflation environments.', flag: 'Green' },
      { id: 'QQEP3G-P4', text: 'I’m satisfied with my current strategy and feel no changes are needed.', flag: 'Green' }
    ],
    secondaryQuestion: 'Have you considered how taxes and fees may be undermining your inflation protection strategy?',
    secondaryAnswers: [
      { id: 'QQEP3G-S1', text: 'I’ve planned for this but could explore minimizing their impact further.', flag: 'Green' },
      { id: 'QQEP3G-S2', text: 'I understand that taxes and fees affect growth but want to learn more.', flag: 'Green' },
      { id: 'QQEP3G-S3', text: 'I haven’t considered this deeply but want to understand the bigger picture.', flag: 'Green' },
      { id: 'QQEP3G-S4', text: 'I feel confident my current strategy handles taxes and fees well.', flag: 'Green' }
    ]
  },
{
    id: 'QQEP3-Yellow1',
    flagType: 'Inflation Awareness',
    type: 'multiple',
    primaryQuestion: 'What’s your biggest concern about inflation impacting your finances?',
    primaryAnswers: [
      { id: 'QQEP3Y1-P1', text: 'It might erode my purchasing power over time.', flag: 'Yellow 1' },
      { id: 'QQEP3Y1-P2', text: 'It might cause me to dip into my savings earlier than planned.', flag: 'Yellow 1' },
      { id: 'QQEP3Y1-P3', text: 'I’m unsure if my current strategies account for inflation risks.', flag: 'Yellow 1' },
      { id: 'QQEP3Y1-P4', text: 'I’m not too worried about inflation right now.', flag: 'Yellow 1' }
    ]
  },
  {
    id: 'QQEP3-Yellow2',
    flagType: 'Inflation Awareness',
    type: 'multiple',
    primaryQuestion: 'How do you think inflation could affect your ability to maintain your lifestyle?',
    primaryAnswers: [
      { id: 'QQEP3Y2-P1', text: 'It could reduce my purchasing power over time.', flag: 'Yellow 2' },
      { id: 'QQEP3Y2-P2', text: 'I’d likely need to dip into savings more often.', flag: 'Yellow 2' },
      { id: 'QQEP3Y2-P3', text: 'I’m not sure how inflation will affect me long-term.', flag: 'Yellow 2' }
    ]
  },
  {
    id: 'QQEP3-Red',
    flagType: 'Inflation Awareness',
    type: 'multiple',
    primaryQuestion: 'What would help you feel more prepared to protect your savings from rising costs?',
    primaryAnswers: [
      { id: 'QQEP3R-P1', text: 'Learning strategies to grow savings despite inflation.', flag: 'Red' },
      { id: 'QQEP3R-P2', text: 'Exploring options for protecting purchasing power.', flag: 'Red' },
      { id: 'QQEP3R-P3', text: 'Having a clearer plan to adjust for rising costs.', flag: 'Red' },
      { id: 'QQEP3R-P4', text: 'I’m unsure—this feels complicated to figure out.', flag: 'Red' }
    ]
  },
  {
    id: 'QQ4-Green',
    flagType: 'Savings Habits',
    type: 'multiple',
    primaryQuestion: 'What’s your strategy for balancing savings growth with accessibility?',
    primaryAnswers: [
      { id: 'QQ4G-P1', text: 'I split my savings into short-term, accessible funds and long-term investments.', flag: 'Green' },
      { id: 'QQ4G-P2', text: 'I keep a portion liquid while maximizing returns on the rest.', flag: 'Green' },
      { id: 'QQ4G-P3', text: 'I regularly reassess my goals to ensure my savings align with my needs.', flag: 'Green' },
      { id: 'QQEP4G-P4', text: 'I focus on building a balance that meets both immediate and future goals.', flag: 'Green' }
    ]
  },
  {
    id: 'QQEP4-Yellow1',
    flagType: 'Savings Habits',
    type: 'multiple',
    primaryQuestion: 'What strategies do you use to grow your savings?',
    primaryAnswers: [
      { id: 'QQEP4Y1-P1', text: 'I set clear goals and automate my savings.', flag: 'Yellow 1' },
      { id: 'QQEP4Y1-P2', text: 'I try to save what’s left over or when I have extra money.', flag: 'Yellow 1' },
      { id: 'QQEP4Y1-P3', text: 'I focus on cutting unnecessary expenses to save more.', flag: 'Yellow 1' },
      { id: 'QQEP4Y1-P4', text: 'I invest in opportunities that align with my financial goals.', flag: 'Yellow 1' },
      { id: 'QQEP4Y1-P5', text: 'I don’t really have a strategy.', flag: 'Yellow 1' }
    ]
  }
];
