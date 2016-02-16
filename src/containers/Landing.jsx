import { connect } from 'react-redux';

import Landing from '../components/Landing';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const LandingContainer = connect(
  mapAllStateToProps
)(Landing);

export default LandingContainer;
