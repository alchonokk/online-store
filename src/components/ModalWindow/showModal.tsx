import { useState } from "react";

const ShowModal = () => {
  //как назвать эту функцию?
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default ShowModal;
