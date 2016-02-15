import { connect } from 'react-redux';

import Login from '../Components/Login';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const LoginContainer = connect(
  mapAllStateToProps
)(Login);

export default LoginContainer;
