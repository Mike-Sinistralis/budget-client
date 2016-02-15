import { connect } from 'react-redux';

import Login from '../components/Login';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const LoginContainer = connect(
  mapAllStateToProps
)(Login);

export default LoginContainer;
