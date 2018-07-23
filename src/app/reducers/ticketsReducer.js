const ticketsReducer = (state = {
    ticketsData: []
}, action) => {
    let indexForUpdate = state.ticketsData.findIndex(x => x.searchID === action.searchID)
    if (indexForUpdate > -1) {
        state.ticketsData[indexForUpdate].ticketInfo = action.ticketInfo;
    } else {
        state.ticketsData.push({searchID: action.searchID, ticketInfo: action.ticketInfo});
    }

    return state;
}

export default ticketsReducer;