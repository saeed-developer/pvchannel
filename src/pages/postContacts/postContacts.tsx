import { useMutation } from 'react-query';
import { addContacts, TAddContact } from '../../services/chatContactsSrv';
import ButtonForm from '../../components/input/global/ButtonForm';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
function PostContacts() {
  const token = useSelector((state: any) => state.auth.token);
  const accessToken = token.access;
  //   console.log('token in add page', token);
  //   console.log('token access in add page', token.access);
  const mutation = useMutation(
    (body: TAddContact) => addContacts(body, accessToken),
    {
      onSuccess: (data) => {
        console.log('error in data contact', data);
        //   toast.success(`${(data as any)?.data?.message?.english}`);
        //   nav('/login', { replace: true });
      },
      onError(error) {
        console.log('error in post contact', error);
        //   toast.error(`${(error as any)?.response?.data?.message?.english}`);
      },
    },
  );

  type FormValues = {
    id: number;
  };

  const {
    handleSubmit,
    // control,
    // formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      id: 9,
    },
  });

  return (
    <div>
      <div>PostContacts</div>
      <button type='submit'>post</button>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            id: 9,
          };
          console.log(data);
          mutation.mutate(employee);
        })}
        className='h-2/4 mt-24 mx-10 p-2 flex-1'
      >
        <ButtonForm text='add' loading={mutation.isLoading} />
      </form>
    </div>
  );
}

export default PostContacts;
