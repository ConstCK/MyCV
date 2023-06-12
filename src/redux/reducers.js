const myReducer = function (state, action) {
  if (action.type === "CHANGE_LANGUAGE") {
    if (state.language === "ru") {
      let newState = Object.assign({}, state, { language: "en" });
      return newState;
    } else {
      let newState = Object.assign({}, state, { language: "ru" });
      return newState;
    }
  }
  return state;
};

export default myReducer;
