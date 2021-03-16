import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("modal-root");

export const Modal = () => {
  return ReactDOM.createPortal(
    <div>モーダル</div>,
    modalRoot,
  )
}