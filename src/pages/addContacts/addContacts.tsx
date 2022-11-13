import { useMutation } from 'react-query';
import { addContact, TIdContact } from '../../services/chatContactsSrv';
import ButtonForm from '../../components/input/global/ButtonForm';
import { useForm } from 'react-hook-form';
import Input from '../../components/input/global/input';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function addNewContacts() {
  const { t } = useTranslation();
  //   console.log('token in add page', token);
  //   console.log('token access in add page', token.access);
  const mutation = useMutation((body: TIdContact) => addContact(body), {
    onSuccess: (data) => {
      console.log('error in data contact', data);
      toast.success(`${(data as any)?.data?.message?.english}`);
      //   nav('/login', { replace: true });
    },
    onError(error) {
      console.log('error in post contact', error);
      if ((error as any).request.status === 500) {
        toast.error('something was wrong');
      }
    },
  });

  type FormValues = {
    id: number | undefined;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      id: undefined,
    },
  });

  return (
    <div>
      <div>addContact</div>
      <button type='submit'>post</button>
      <br />
      <Link to='/'>back</Link>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            id: data.id,
          };
          // console.log('data',data.id);
          mutation.mutate(employee);
        })}
        className='h-2/4 mt-24 mx-10 p-2 flex-1'
      >
        <Input
          name='id'
          type='number'
          control={control}
          placeholder={t('id')}
          error={errors?.id?.message}
          rules={{ required: `${t('required')}` }}
        />
        <ButtonForm text='add' loading={mutation.isLoading} />
      </form>
    </div>
  );
}

export default addNewContacts;
