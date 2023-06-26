export const convertTime = (listTime)=>{
  let timeNow = new Date().toISOString();
  timeNow = Date.parse(timeNow) - 10800000;
  listTime = Date.parse(listTime);
  let difTime = timeNow - listTime
  difTime = Math.floor(difTime /60000)
  if(difTime < 0){
    return `0 minutes ago`
  }else if(difTime >= 0 && difTime <= 59) {
    return `${difTime} minutes ago`
  } else if (difTime > 1439){
    return `${Math.floor(difTime/1440)} days ago`
  } else if (difTime > 59){
    return `${Math.floor(difTime/60)} hours ago` ; 
  }
}