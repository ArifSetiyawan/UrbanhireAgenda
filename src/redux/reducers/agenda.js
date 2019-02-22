const initialValue = {
  markedDate: {},
  dateNow: '',
  modalVisible: false,
  modal: '',
  selectedDate: '',
  events: [],
  modalVisibleEvent: false
    
  }
  
  export default (state = initialValue, action) => {
    switch (action.type) {
      case 'GET_DATE_NOW':
        return {
          ...state, 
          markedDate: action.payload.markedDate, 
          dateNow: action.payload.date
        }
  
      case 'SET_MODAL_VISIBLE':
        return {
          ...state, 
          modalVisible: action.payload.visible, 
          modal: action.payload.modal, 
          selectedDate: action.payload.date
        };
  
      case 'SET_MODAL_VISIBLE_EVENT':
        return {
          ...state, 
          modalVisibleEvent: action.payload.visible, 
          selectedDate: action.payload.date
        };
        
      case 'CREATE_AGENDA':
        return {
        ...state, 
        events: [...state.events, action.payload],
        markedDate: {
          ...state.markedDate, 
          [action.payload.date]: {selected: true, marked: true, selectedColor: 'blue'}
        }
      }
  
      case 'DELETE_AGENDA':
        return {
          ...state, data: state.data.filter(item => item.id !== action.payload)
        }
      
      case 'EDIT_AGENDA':
        return {
          data: state.data.map(item => (item.id == action.payload.id) ? action.payload : item)
        }
        default:
        return state;
    }
  }