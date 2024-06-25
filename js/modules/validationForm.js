export const validationForm = (form) => {
  const validate = new JustValidate(form, {
    errorLabelStyle: {
      color: '#f00',
    },
    errorFieldStyle: {
      borderColor: 'transparent',
    },
    errorFieldCssClass: 'error',
    errorsContainer: document.querySelector('.employer__error'),
  });

validate
  .addField('#logo', [
    {
      rule: 'minFilesCount',
      value: 1,
      errorMessage: 'Добавьте логотип',
    },
    {
      rule: 'files',
      value: {
        files: {
          extensions: ['jpeg', 'jpg', 'png'],
          maxSize: 102400,
          minSize: 1000,
          types: ['image/jpeg', 'image/jpg', 'image/png'],
        },
      },
      errorMessage: 'Размер файла должен быть не больше 100Кб',
    },
  ])
  .addField('#company', [
    {
      rule: 'required', 
      errorMessage: 'Заполните название компании'
    }
  ])
  .addField('#title', [
    {
      rule: 'required', 
      errorMessage: 'Заполните название вакансии'
    }
  ])
  .addField('#salary', [
    {
      rule: 'required', 
      errorMessage: 'Заполните заработную плату'
    }
  ])
  .addField('#location', [
    {
      rule: 'required', 
      errorMessage: 'Заполните город'
    }
  ])
  .addField('#email', [
    {
      rule: 'required', 
      errorMessage: 'Заполните e-mail'
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный e-mail'
    }
  ])
  .addField('#description', [
    {
      rule: 'required', 
      errorMessage: 'Заполните описание'
    }
  ])
  .addRequiredGroup('#format', 'Выберите формат работы')
  .addRequiredGroup('#experience', 'Выберите опыт работы')
  .addRequiredGroup('#type', 'Выберите тип занятости');

  return validate;
};