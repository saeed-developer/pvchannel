function Input({ ...props }) {
  return (
    <div className='my-8'>
      <input
        type={props.type}
        value={props.field.value}
        onChange={props.field.onChange}
        placeholder={props.placeholder}
        className='p-2 w-full bg-transparent border-b-2 border-gray-400 outline-none'
      />
      <p className='text-error'>{props?.fieldState?.error?.message}</p>
    </div>
  );
}

export default Input;
