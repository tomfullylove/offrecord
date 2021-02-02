import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { updateVisibleContent } from '../../state/features/visibleContentSlice';

import Screen from './Screen.component';

interface StateProps {
  featuredContent: any,
  standardContent: any,
}

interface DispatchProps {
  updateContent: (content: any) => void;
}

export type Props = StateProps & DispatchProps;

const mapStateToProps = (state: any): StateProps => ({
  featuredContent: state.discover.featured,
  standardContent: state.discover.standard,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  updateContent: (content: any): any => dispatch(updateVisibleContent(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
