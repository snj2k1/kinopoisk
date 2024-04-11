import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as styles from './styles.module.scss';
import {
  Button,
  ErrorMessage,
  Input,
  PATH_PAGE,
  VALIDATION_RULES,
  createUser,
} from '../../../shared';
import { useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [isError, setIsError] = useState<boolean | string>(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resetOptions: {
      keepErrors: false,
    },
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        setIsError(false);
        navigate('/');
      })
      .catch(() => {
        setIsError('Пользователь с таким E-Mail уже существует!');
      });
  };

  return (
    <div className={styles.login}>
      <h1>Регистрация</h1>
      {isError && <p style={{ color: 'red' }}>{isError}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Controller
          control={control}
          name='email'
          rules={VALIDATION_RULES.email}
          render={({ field }) => (
            <>
              <Input
                label='Введите E-Mail'
                type='email'
                placeholder='E-Mail'
                {...field}
                isError={Boolean(errors.email)}
                required
              />
              {<ErrorMessage error={errors.email} />}
            </>
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={VALIDATION_RULES.password}
          render={({ field }) => (
            <>
              <Input
                label='Введите пароль'
                type='password'
                placeholder='Password'
                {...field}
                isError={Boolean(errors.password)}
                required
              />
              {<ErrorMessage error={errors.password} />}
            </>
          )}
        />
        <Button type='submit'>Зарегистрироваться</Button>
      </form>
      <span>
        Уже зарегистрированы?{' '}
        <Link to={PATH_PAGE.login} className={styles.link}>
          Войти
        </Link>
      </span>
    </div>
  );
};

export default RegisterPage;
