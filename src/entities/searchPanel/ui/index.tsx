import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.scss';
import { InputSearch } from '../../../shared/ui/inputSearch/ui';
import { setSuggest } from '../../../shared';

type FormValues = {
  query: string;
};

export const SearchPanel = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset, setValue } = useForm<FormValues>({
    mode: 'onChange',
    resetOptions: {
      keepErrors: false,
    },
    defaultValues: {
      query: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.query.trim()) {
      const queryParams = new URLSearchParams(data).toString();
      navigate('/search?' + queryParams);
      setSuggest(data.query);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        control={control}
        name='query'
        render={({ field }) => (
          <InputSearch
            type='text'
            placeholder='Фильмы, сериалы'
            {...field}
            setValue={setValue}
            required
          />
        )}
      />
    </form>
  );
};
