import Card from '../PresentationComponent/Card';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../redux/Actions/Actions';




const mapStateToProps = (state) => {

    return {
        state: state.moviesMiddlewareReducer.data.data,
        searchValue: state.FormReducer.searchValue,
        searchBy: state.FormReducer.searchBy,
        sortBy: state.FormReducer.sortBy

    }
};

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});





export const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card)