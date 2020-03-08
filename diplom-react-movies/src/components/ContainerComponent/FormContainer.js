import Form from '../PresentationComponent/Form';
import { connect } from 'react-redux';
import {getSortByDate, getSortByRaiting, getSearchBy, getInputFieldValue, onSubmitForm, onClickSearchButton, itemsIsLoading} from '../../redux/Actions/Actions';



const mapStateToProps = (state) => ({
    state: state.FormReducer.inputValue,
    loading: state.moviesMiddlewareReducer.loading,
    searchBy: state.FormReducer.searchBy,
    sortBy: state.FormReducer.sortBy,
    countMovies: state.FormReducer.countMovies
})

const mapDispatchToProps = (dispatch) =>({
    onChange: (event) => dispatch(getInputFieldValue(event.target.value)),
    onSubmit: (event) => dispatch(onSubmitForm(event.preventDefault())),
    onMouseDown: () => dispatch(itemsIsLoading()),
    onMouseUp: () => dispatch(onClickSearchButton()),
    getSearchBy: (event)=> dispatch(getSearchBy(event.target.id)),

    onClickReleaseDate: (event)=> dispatch(getSortByDate(event.target.id)) ,
    onClickRaiting: (event)=> dispatch(getSortByRaiting(event.target.id))
})



export  const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);