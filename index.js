/** correct answers collection*/
const correctAnswers=["A","B","B","A","B"];

/**target form and result div by qureing the DOM */
const form=document.querySelector(".form");
const result=document.querySelector(".result");

/**As far as form will be submitted submit event will be triggured and then addEventListner will lsiten
 * submit event
*/
form.addEventListener('submit',(e)=>{
e.preventDefault();
// console.log(form.Q1.value)
let score=0;
/**usersAnswer will contain the answers selected by user */
const usersAnswer=[
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
    form.Q5.value,
    
]
// console.log(usersAnswer)

/**forEach will iterate array collection and call back function in it will perform comparison */
usersAnswer.forEach((userAnswer,index)=>{
    (userAnswer===correctAnswers[index]) ? (score+=25) : null
})
/**result will be visible */
// window.scrollTo(300,500);
window.scrollTo(0,0);
result.classList.remove("d-none");

/**logic to show animation of score count from low to high value */
let output=0;
const timer=setInterval(() => {
    if (output===score) {
        clearInterval(timer)
    } 
    else{
        output++;
    } 
    console.log("interval continue")    
    result.querySelector('span').textContent=`${score} %`
}, 10);

})


