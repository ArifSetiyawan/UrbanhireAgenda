const initialState = {
    markedDate: {},
    dateNow: '',
    modalVisible: false,
    modal: '',
    selectedDate: '',
    agendas: [],
    modalVisibleAgenda: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATE_NOW':
        return {
          ...state,
          markedDate: action.payload.markedDate,
          dateNow: action.payload.date
        }
      case 'MODAL_VISIBLE_SET':
        return {
          ...state,
          modalVisible: action.payload.visible,
          modal: action.payload.modal,
          selectedDate: action.payload.date
        }
      case 'MODAL_VISIBLE_AGENDA_LIST':
        return {
          ...state,
          modalVisibleAgenda: action.payload.visible,
          selectedDate: action.payload.date
        }
      case 'CREATE_AGENDA':
        return {
          ...state,
          agendas: [...state.agendas, action.payload],
          markedDate: {
            ...state.markedDate,
            [action.payload.date]: {
              marked: true
            }
          }
        }
      default:
        return state;
    }
  };