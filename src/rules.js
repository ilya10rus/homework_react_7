import * as yup from 'yup'

export const sendFormData = (formData)=>{
      console.log(formData);
    }
  
export const fieldsSchema = yup.object()
        .shape({email: yup
                  .string()
                  .matches( /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                  'Некоректная почта')
                  .max(35,'Длинна поля "Email" до 35 символов')
                  .min(3,'Поле "email" обязательно к заполнению'),
                password: yup
                 .string()
                 .matches(/^[\w_]*$/,
                 'Неверный пароль.Допустимые символы - буквы, цифры и нижнее подчеркивание.',
                 )
                 .max(20,'Длинна поля "password" до 20 символов')
                 .min(3,'Поле "Password" обязательно к заполнению'),
                repeatPass: yup
                  .string()
                  .min(3,'Поле "repeat password" обязательно к заполнению')
                  .oneOf([yup.ref('password')], 'Пароль не совпадает')
                  })
