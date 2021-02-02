import { connect } from 'react-redux';

import Screen from './Screen.component';

interface StateProps {
  content: any,
}

export type Props = StateProps;

const mapStateToProps = (state: any): StateProps => ({
  content: state.visibleContent,
});

export default connect(mapStateToProps)(Screen);
