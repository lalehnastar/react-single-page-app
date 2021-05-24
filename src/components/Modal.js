import React, {useState, useEffect} from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";



 
function Modal (){

  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p id="p1">Hi,</p>
      <img id="img" src="https://www.nylabone.com/-/media/Images/Nylabone-NA/US/Dog101/Activities-Fun/10-great-small-dog-breeds/maltese-portrait.jpg?la=en&hash=D9E453DCD438E1631C1D994426DAC62B064011BF"/>
      <button id="modal-button-hide" onClick={hideModal}>Hide modal</button>
    </ReactModal>
  ));
 
  return<button id="modal-button-show" onClick={showModal}>Show modal</button>

};

export default Modal;
