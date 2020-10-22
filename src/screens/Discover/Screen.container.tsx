import {connect} from 'react-redux';

import Screen from './Screen.component';

interface StateProps {
  previews: any;
}

export type Props = StateProps;

const mapStateToProps = (state): StateProps => ({
  previews: state.discover.previews,
});

export default connect(mapStateToProps)(Screen);
