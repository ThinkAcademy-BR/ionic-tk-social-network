import { AppState } from '../../shared.state';

export type AppLanguage = 'en' | 'pt-BR';
export type AppTheme = true | false;

export interface SettingsState {
  language: string;
  isDark: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
