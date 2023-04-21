import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom';

function Modal({ children, displayUserForm }) {
  const navigate = useNavigate();

  // event propagation (bubbling)
  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  const closeForm = () => {
    if (typeof displayUserForm === 'function') {
      displayUserForm();
    }
    navigate('/');
  };

  return (
    <div className={classes.shadow} onClick={closeForm}>
      <dialog open className={classes.modal} onClick={handleDialogClick}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
