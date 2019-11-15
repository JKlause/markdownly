export const getTabName = state => state.tabName;
export const getHistoryArray = state => state.history;
export const getTitleSearch = state => state.searchTitle;
export const getFilteredHistory = state => getHistoryArray(state).filter(item => item.name.includes(getTitleSearch(state)));
export const getCurrentIndex = state => state.currentIndex;
