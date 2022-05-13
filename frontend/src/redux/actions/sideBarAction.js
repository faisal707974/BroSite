export const sideBarAction = () => async (dispatch, getState)=>{
    try{

        const state = getState()
        const current = state.SideBar.status

        dispatch({type: 'SIDEBAR_STATUS_CHANGE', payload:!current})

    }catch(error){
        console.log({error})
    }
}