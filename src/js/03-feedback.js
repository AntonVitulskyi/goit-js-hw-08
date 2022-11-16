import throttle from "lodash.throttle";

const feedbackFormEl = document.querySelector('.feedback-form');
const inputFormEl = document.querySelector('input');
const textareaFormEl = document.querySelector('textarea');


const storageValues = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storageValues !== null){
    inputFormEl.value = storageValues.email;
    textareaFormEl.value = storageValues.message;
} 


const onFeedbackFormElSubmit = event => {
  event.preventDefault();
  const email = event.target.elements[0].value;
  const message = event.target.elements[1].value;
  if (email === '' || message === '') {
    alert("Всі поля мають бути заповнені!")
   }
   else {
    const finalObject = {email, message} ;
    console.log(finalObject)
    event.target.reset();
    localStorage.clear();
}};
// ==========================================

const onFeedbackFormElInput = event => {

    const email = feedbackFormEl.elements[0].value;
    const message = feedbackFormEl.elements[1].value;
  
    const userData = { email, message }

    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

feedbackFormEl.addEventListener('submit', onFeedbackFormElSubmit);
feedbackFormEl.addEventListener('input', throttle(onFeedbackFormElInput, 500));
