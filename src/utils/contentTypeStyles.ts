import { ContentTypeStyles } from '../types/ContentTypeStyles';
import colors from './colors';

export default {
  'article': { color: colors.main[0], width: '55px' },
  'review': { color: colors.main[1], width: '53px' },
  'interview': {color: colors.main[2], width: '74px'},
  '': {color:colors.white, width: '0px'}
} as ContentTypeStyles;
