export const save_current_workshop_id_to_store = (schedules, currSchedule, dispatch)=>{
    if (schedules) {
        const current = schedules[currSchedule]
        dispatch({ type: 'CURRENT_WORKSHOP_ID', payload: current._id })
    }
}