export const workshopIdReducer = (state = '', action) => {
    if (action.type === 'CURRENT_WORKSHOP_ID') {
        return action.payload
    } else {
        return state
    }
}