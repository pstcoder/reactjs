function calTime(milli){
    let days = Math.floor(milli/(24*60*60*1000))
    let hours = Math.floor(milli/(3600*1000))%24
    let minutes = Math.floor(milli/60000)%60
    let seconds = Math.floor(milli/1000)%60 

    let result = ""
    if(days > 0 ) result += ` ${days}day`
    if(hours >0) result += ` ${hours}hr`
    if(minutes>0 && days == 0) result += ` ${minutes}min`
    if(seconds>0 && hours==0 && minutes<10) result += ` ${seconds}sec`

    if(result != ""){
        return result+=" ago"
    }else{
        return "just now"
    }
}
export default calTime;