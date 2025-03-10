const API_URL = 'https://denpan.ru/api/kbooking';


const getData = (onSuccess, onFail) => fetch(`${API_URL}/data`)
  .then((response) => response.json())
  .then((ads) => onSuccess(ads))
  .catch(() => onFail());

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
