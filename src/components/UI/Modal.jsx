import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return (
        <div>
        <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>Oops...</h2>
                </header>
                <div className={classes.content}>
                    <p>You should write down your plan</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

const ErrorModal = (props) => {
    return(
        <>
            {ReactDOM.createPortal(
                    <Backdrop onConfirm={props.onConfirm}/>,
                    document.getElementById('backdrop')
                )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('modal'),
            )}
        </>
    );
};

export default ErrorModal;