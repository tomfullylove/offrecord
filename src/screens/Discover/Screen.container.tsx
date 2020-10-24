import {connect} from 'react-redux';

import Screen from './Screen.component';

interface StateProps {
  featuredContent: any,
  standardContent: any;
}

export type Props = StateProps;

const mapStateToProps = (state: any): StateProps => ({
  featuredContent: state.discover.content.featured,
  standardContent: state.discover.content.standard,
});

export default connect(mapStateToProps)(Screen);
