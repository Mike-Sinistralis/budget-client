function mapStateToProps(state) {
  return {
    todayRate: -10,
    routineRate: 40,
    netRate: todayRate + routineRate
  };
}

export default mapStateToProps;
