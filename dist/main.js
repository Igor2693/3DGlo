(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),o=e=>e<10?`0${e}`:e,m=()=>{let m=(()=>{let e=(new Date("10 september 2024").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),n=Math.floor(e/60%60),m=Math.floor(e%60);return m=o(m),n=o(n),t=o(t),{timeRemaining:e,hours:t,minutes:n,seconds:m}})();e.textContent=m.hours,t.textContent=m.minutes,n.textContent=m.seconds,m.timeRemaining<=0&&(clearInterval(),e.textContent="00",t.textContent="00",n.textContent="00")};setInterval(m,1e3),m()})()})();