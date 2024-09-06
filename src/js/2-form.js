const defaultFormData = { email: '', message: '' };
const requiredMessage = 'Fill please all fields';
const storageKey = 'feedback-form-state';

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('.feedback-form [name="email"]');
const messageElement = document.querySelector(
  '.feedback-form [name="message"]'
);

const formData = loadFromLocalStorage({ ...defaultFormData });

function saveToLocalStorage(value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}

function initFormFields(formValues) {
  emailElement.value = formValues.email;
  messageElement.value = formValues.message;
}

function loadFromLocalStorage(defaultFormData) {
  let loadedFormValues = {};
  try {
    const savedFormData = JSON.parse(localStorage.getItem(storageKey));

    loadedFormValues.email = (savedFormData.email ?? defaultFormData.email)
      .toString()
      .trim();
    loadedFormValues.message = (
      savedFormData.message ?? defaultFormData.message
    )
      .toString()
      .trim();
  } catch (e) {
    // pass
    loadedFormValues = { ...defaultFormData };
  }

  return loadedFormValues;
}

const clearLocalStorage = () => localStorage.removeItem(storageKey);

const isFormValid = value => !!value.email && !!value.message;

const submitForm = event => {
  event.preventDefault();
  if (!isFormValid(formData)) {
    alert(requiredMessage);
    return;
  }
  console.log(formData);
  clearLocalStorage();
  formElement.reset();
  formData.email = defaultFormData.email;
  formData.message = defaultFormData.message;
};

const saveInputsValues = event => {
  const targetElement = event.target;
  const filedName = targetElement.name;
  if (!['email', 'message'].includes(filedName)) {
    return;
  }

  formData[filedName] = targetElement.value.trim();

  saveToLocalStorage(formData);
};

initFormFields(formData);
formElement.addEventListener('input', saveInputsValues);
formElement.addEventListener('submit', submitForm);
