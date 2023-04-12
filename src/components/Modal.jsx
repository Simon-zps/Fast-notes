import classes from './Modal.module.css'

function Modal({children}) {
    return (
        <div className={classes.shadow}>
            <dialog open className={classes.modal}>{children}</dialog>
        </div>
    );
}

export default Modal;