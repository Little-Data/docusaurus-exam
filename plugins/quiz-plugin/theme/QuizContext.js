import { createContext } from 'react';

export const QuizContext = createContext({
  showAnsDirectly: false,
  showJiexiDirectly: false,
  forceExpandAllState: false,
  setForceExpandAllState: () => {},
  resetAllSignal: 0,
  triggerResetAll: () => {},
  registerWorkitem: () => {},
  unregisterWorkitem: () => {},
});