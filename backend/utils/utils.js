export const getStringDate = (date) => {
    if(typeof date === String){
        const arr = date.split('-')
        const newDate = new Date(arr[0],arr[1]-1,arr[2])
        return newDate.toDateString()
    }else if (typeof date === 'object'){
        return date.toDateString()
    }
}