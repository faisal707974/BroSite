export const sideBarReducer = (state = false, action) => {
    if (action.type === 'SIDEBAR_STATUS_CHANGE') {
        return { status: action.payload }
    } else {
        return state
    }
}