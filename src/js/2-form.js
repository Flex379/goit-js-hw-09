const refs = {
  formFeedBack: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
};

refs.formFeedBack.addEventListener('input', onFormFeedBackInput);
refs.formFeedBack.addEventListener('submit', onFeedBackFormSubmit);

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email;
  formData.message = parsedData.message;

  refs.formFeedBack.elements['email'].value = parsedData.email;
  refs.formFeedBack.elements['message'].value = parsedData.message;
}

function onFeedBackFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  refs.formFeedBack.elements['email'].value = '';
  refs.formFeedBack.elements['message'].value = '';
}

function onFormFeedBackInput(event) {
  formData[event.target.name] = event.target.value.trim();

  const dataInfo = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', dataInfo);
}
