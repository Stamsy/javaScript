function sinoTheWalker(input) {

    let timeLeaves = input.shift().split(":")
    let hour = Number(timeLeaves[0]);
    let minutes = Number(timeLeaves[1]);
    let seconds = Number(timeLeaves[2]);

    let eachSteps = Number(input[0])
    let timeForEachSteps = Number(input[1])

    let patInSeconds = eachSteps * timeForEachSteps;

    seconds = patInSeconds + seconds;
     if(hour < 0 || minutes < 0 || seconds < 0){
        return
     }
          if(seconds >= 60){
            minutes = Math.floor(minutes + seconds /60)
            seconds = Math.floor(seconds % 60)
          }
          if(minutes >= 60){
            hour = Math.floor(hour + minutes/60)
            minutes = Math.floor(minutes % 60)
          }
          if(hour >= 24){
            hour = hour % 24
          }
           
        
       
    if(hour < 10){
        hour = "0" + hour
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
     console.log(`Time Arrival: ${hour}:${minutes}:${seconds}`)
}
sinoTheWalker(["12:30:30",
    "90",
    "1"])