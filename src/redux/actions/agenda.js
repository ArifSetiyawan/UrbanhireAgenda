export const createAgenda = (value, date) => {
  return {
    type: 'CREATE_AGENDA',
    payload: {
      date,
      name: value.name,
      description: value.description
    }
  }
}

  export const getDate = (date) => {
    return {
      type: 'GET_DATE_NOW',
      payload: {
        markedDate: {
          [date]: {
            selected: true
          }
        },
        date
      }
    }
  }

export const deleteAgenda = (data) => {
  return {
    type: 'DELETE_AGENDA',
    payload: data
  }
}
export const modalVisibleSet = (visible,modal = '',date) => ({
  type: 'SET_MODAL_VISIBLE',
  payload: {
    visible,
    modal,
    date
  }
})

export const modalVisibleEventset = (visible,date) => ({
  type: 'SET_MODAL_VISIBLE_EVENT',
  payload: {
    visible,
    date
  }
})
export const updateAgenda = (data) => {
  return {
    type:'EDIT_AGENDA',
    payload:data
  }
}