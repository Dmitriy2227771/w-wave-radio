console.log('Init!');

new window.JustValidate('.form', {
  rules: {
    checkbox: {
      required: true
    },
  },
  colorWrong: '#D52B1E',
  focusWrongField: true,
  messages: {
    text: {
      required: 'Вы не ввели сообщение',
      minLength: 'Введите 5 и более символов',
      maxLength: 'Запрещено вводить более 300 символов'
    },
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Вы не ввели e-mail'
    }
  }
})

new window.JustValidate('.header-form', {
  colorWrong: '#D52B1E',
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    password: {
      required: 'Вы не ввели пароль',
      password: 'Здесь должно быть минимум 1 цифра и 1 буква',
      minLength: 'Введите 4 и более символов',
      maxLength: 'Запрещено вводить более 8 символов'
    }
  }
})


