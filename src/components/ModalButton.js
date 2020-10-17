import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "shards-react";

const ModalButton = (props) => {
    const [show, setShow] = useState(false)
    const toggleModal = () => {
        setShow(!show)
    }
    const { headerText, MainText, onSubmit, theme, buttonText, data, dindex } = props
    return (<>
       {props.isspan?<span theme={theme} style={{cursor:"pointer"}}onClick={toggleModal}>{buttonText}</span>: <Button theme={theme} onClick={toggleModal}>{buttonText}</Button>}
        <Modal size="lg"


            open={show} toggle={toggleModal}>
            <ModalHeader>{headerText}</ModalHeader>
            <ModalBody>{MainText}</ModalBody>
            <ModalFooter><Button onClick={toggleModal}>No</Button> <Button onClick={() => { onSubmit(data, dindex); toggleModal() }}>Yes</Button></ModalFooter>
        </Modal>
    </>
    )

}

ModalButton.cname = 'ModalButton';

export default ModalButton;