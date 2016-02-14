import { connect } from 'react-redux';

import Dashboard from '../Components/Dashboard';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const DashboardContainer = connect(
  mapAllStateToProps
)(Dashboard);

export default DashboardContainer;
