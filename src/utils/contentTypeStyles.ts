import { ContentTypeStyles } from '../types/ContentTypeStyles';
import colors from './colors';

export default {
  'article': { color: { main: colors.main[0], text: colors.text.main }, width: '55px' },
  'review': { color: { main: colors.main[1], text: colors.text.main }, width: '53px' },
  'interview': { color: { main: colors.main[2], text: colors.text.main }, width: '74px'},
} as ContentTypeStyles;
