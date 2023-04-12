import classes from './Modal.module.css'

function Modal({children, displayUserForm}) {

    //event propagation (bubbling)
    const handleDialogClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={classes.shadow} onClick={displayUserForm} >
            <dialog open className={classes.modal} onClick={handleDialogClick} >{children}</dialog>
        </div>
    );
}

export default Modal;