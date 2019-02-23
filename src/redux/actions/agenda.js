const getDate = (date) => ({
    type: 'GET_DATE_NOW',
    payload: {
      markedDate: {
        [date]: {
          selected: true
        }
      },
      date
    }
  });
  
  const modalVisibleSet = (visible,modal = '',date) => ({
    type: 'MODAL_VISIBLE_SET',
    payload: {
      visible,
      modal,
      date
    }
  })
  
  const modalVisibleAgendaList = (visible,date) => ({
    type: 'MODAL_VISIBLE_AGENDA_LIST',
    payload: {
      visible,
      date
    }
  })
  
  const createAgenda = (value,date) => ({
    type: 'CREATE_AGENDA',
    payload: {
      date,
      name: value.name,
      description: value.description
    }
  })
  
  export {
    getDate,
    modalVisibleSet,
    createAgenda,
    modalVisibleAgendaList
  }