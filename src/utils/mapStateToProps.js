function mapAllStateToProps(state) {
  return {
    user: state.get('user'),
    name: state.get('name'),
    description: state.get('description'),
    routine: state.get('routine'),
    nonroutine: state.get('non-routine')
  };
}

module.exports = {
  mapAllStateToProps: mapAllStateToProps
};
