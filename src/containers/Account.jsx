import { connect } from 'react-redux';

import Account from '../Components/Account';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const AccountContainer = connect(
  mapAllStateToProps
)(Account);

export default AccountContainer;
