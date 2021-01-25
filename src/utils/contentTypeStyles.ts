import { ContentTypeStyles } from '../types/ContentTypeStyles';
import colors from './colors';

export default {
  'article': { color: colors.main[0], width: '52px' },
  'review': { color: colors.main[1], width: '50px' },
  'interview': {color: colors.main[2], width: '70px'},
  '': {color:colors.white, width: '0px'}
} as ContentTypeStyles;
