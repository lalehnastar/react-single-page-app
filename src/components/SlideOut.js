import React, { useState } from "react";
import SlideOut from "@ijsto/react-slideout";

const Slideout = () => {
  const [slideOutIsOpen, setSlideOutIsOpen] = useState(false);

  const openSlideOut = () => {
    setSlideOutIsOpen(true);
  };

  const closeSlideOut = () => {
    setSlideOutIsOpen(false);
  };

  return (
    <div className="slideout" >
      <button onClick={openSlideOut}>Favorites</button>
      <SlideOut isOpen={slideOutIsOpen} onClose={closeSlideOut}>
        <p id="p-slideout">Welcome to your favorites</p>
      </SlideOut>
    </div>
  );
};
export default Slideout;