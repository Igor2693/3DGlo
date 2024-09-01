const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    
    const zero = (elem) => {
        if (elem < 10) {
          return (elem = `0${elem}`);
        } else {
          return elem;
        }
      };

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60)% 60)
        let seconds = Math.floor(timeRemaining % 60)
        seconds = zero(seconds);
        minutes = zero(minutes);
        hours = zero(hours);

        return {timeRemaining, hours, minutes, seconds}
    }

    const updateClock = () => {
        let getTime = getTimeRemaining ()
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds


        if (getTime.timeRemaining <= 0) {
            clearInterval();
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
          }

    }
    setInterval(updateClock, 1000)
    updateClock()
}
export default timer