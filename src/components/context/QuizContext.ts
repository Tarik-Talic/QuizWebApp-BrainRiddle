import { createContext } from 'react';
import { SettingsCardProps } from '../card/settingsCard/SettingsCard';

export const QuizContext = createContext<SettingsCardProps | undefined>(
  undefined
);
