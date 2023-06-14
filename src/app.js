import style from './app.module.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {fieldsSchema,sendFormData} from'./rules'


export const Applicaton = function () {
  
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email:'',
      password:'',
      repeatPass:'',
    },
    resolver: yupResolver(fieldsSchema),
  });


  let errorMessage = errors.email?.message||errors.password?.message||errors.repeatPass?.message

  return (
  <div className={style.wrapper}>
    <div className={style.container}>
      
        <form className={style.form} onSubmit={handleSubmit(sendFormData)}>
       { errorMessage && <span className={style.errorMessage}>{errorMessage}</span>}
        <input 
          name='email'
          type='email'
          placeholder='Email...'
          {...register('email')}
          
        />
         
         <input
          name='password'
          type='password'
          placeholder='Password...'
          {...register('password')}
        />
        
        <input 
         name='repeatPass'
         type='password'
         placeholder='repeat password please...'
         {...register('repeatPass')}
        />
        <button  
          type = "submit" 
          className={style.btn}
          disabled={!!errorMessage}>
          Зарегестрироваться
        </button>
      </form>
    </div>
  </div>
  );
};