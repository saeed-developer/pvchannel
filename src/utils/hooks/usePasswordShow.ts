import { useState } from 'react';

function usePasswordShow() {
  const [visible, setVisiblity] = useState(false);

  const ToggleShow = () => {
    setVisiblity((visiblity) => !visiblity);
  };

  const InputType = visible ? 'text' : 'password';

  return [ToggleShow, visible, InputType];
}

export default usePasswordShow;
