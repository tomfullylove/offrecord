import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getDiscoveryContent } from '../../state/features/discoverSlice';
import { updateVisibleContent } from '../../state/features/visibleContentSlice';

import Screen from './Screen.component';

interface StateProps {
  featuredContent: any,
  standardContent: any,
  loading: boolean,
}

interface DispatchProps {
  getContent: () => void,
  updateContent: (content: any) => void;
}

export type Props = StateProps & DispatchProps;

const mapStateToProps = (state: any): StateProps => ({
  featuredContent: state.discover.content.featured,
  standardContent: state.discover.content.standard,
  loading: state.discover.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getContent: (): any => dispatch(getDiscoveryContent()),
  updateContent: (content: any): any => dispatch(updateVisibleContent(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
