import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  error?: string;
  control?: any;
  rules?: any;
}

function Input({ name, type, placeholder, error, control, rules }: InputProps) {
  return (
    <div className='my-8'>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div>
            <input
              type={type}
              // {...field}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              ref={field.ref}
              autoFocus
              placeholder={placeholder}
              className='p-2 w-full bg-transparent border-b-2 border-gray-400 outline-none text-sm'
            />
            <p className='text-error text-sm'>{error}</p>
          </div>
        )}
      />
    </div>
  );
}

Input.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  rules: PropTypes.any,
  control: PropTypes.any,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  error: '',
  rules: null,
  control: null,
};

export default Input;
