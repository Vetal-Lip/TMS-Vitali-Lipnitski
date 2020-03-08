import Modal from '../PresentationComponent/Modal';
import {openModal, closeModal} from '../../redux/Actions/Actions';
import { connect } from 'react-redux';


const mapStateToProps =(state)=>({
    isOpen: state.ModalReducer.isOpen
})

const mapDispatchToProps =(dispatch) =>({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
})






export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)