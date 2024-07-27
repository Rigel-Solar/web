import { withThemeProvider } from 'storybook-addon-theme-provider';
import Provider from './Provider';
import themes from '../src/styles/themes';

export const decorators = [withThemeProvider(Provider)];

export const parameters = {
  globals: {
    selectedTheme: 'default',
    themes: [
      {
        name: 'default',
        color: 'white',
        themeObject: themes,
      },
      {
        name: 'dark',
        color: 'black',
        themeObject: themes,
      },
    ],
  },
};
