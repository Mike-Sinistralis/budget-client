function mapDispatchToProps(state) {
  return {
    todayRate: -10,
    routineRate: 40,
    netRate: todayRate + routineRate
  };
}

module.exports = {
  mapDispatchToProps: mapDispatchToProps
};
