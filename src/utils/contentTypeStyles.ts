import { ContentTypeStyles } from '../types/ContentTypeStyles';
import colors from './colors';

export default {
  'article': { color: { main: colors.main[0], text: colors.black }, width: '55px' },
  'review': { color: { main: colors.main[1], text: colors.white }, width: '53px' },
  'interview': { color: { main: colors.main[2], text: colors.black }, width: '74px'},
} as ContentTypeStyles;
