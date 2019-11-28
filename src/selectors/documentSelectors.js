export const getTabName = state => state.document.tabName;
export const getHistoryArray = state => state.document.history;
export const getTitleSearch = state => state.document.searchTitle;
export const getFilteredHistory = state => getHistoryArray(state).filter(item => item.name.includes(getTitleSearch(state)));
export const getCurrentIndex = state => state.document.currentIndex;
export const getLandingPage = state => state.document.landingPage;
