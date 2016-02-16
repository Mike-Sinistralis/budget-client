import { connect } from 'react-redux';

import App from '../components/App';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const AppContainer = connect(
  mapAllStateToProps
)(App);

export default AppContainer;
