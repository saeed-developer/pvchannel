import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

interface ButtonProps {
  text: string;
  loading: boolean;
  onClick: () => void;
}

function ButtonForm({ text, loading, onClick }: ButtonProps) {
  return (
    <div>
      {loading ? (
        <Button
          variant='primary'
          disabled
          className='bg-yellow-500 opacity-50 py-1 px-2 w-52 text-xl mt-6 cursor-pointer rounded-md text-gray-900'
        >
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </Button>
      ) : (
        <Button
          variant='primary'
          type='submit'
          className='bg-yellow-500 py-1 px-2 w-52 text-xl mt-6 cursor-pointer rounded-md text-gray-900'
          onClick={onClick}
        >
          {text}
        </Button>
      )}
    </div>
  );
}

ButtonForm.prototype = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonForm.defaultProps = {
  type: 'text',
  loading: false,
  onClick: undefined,
};

export default ButtonForm;
