import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { connect } from 'react-redux';

import { getDate , modalVisibleSet ,modalVisibleAgendaList } from '../redux/actions/agenda';

class Agenda extends Component {

  getFormatDateNow() {
    let date = new Date()
    date = date.toLocaleDateString('id')
    date = date.split('/')
    let getDate = date[0]
    if (getDate.length === 1) {
      getDate = `0${getDate}`
    }
    let getMonth = date[1]
    if (getMonth.length === 1) {
      getMonth = `0${getMonth}`
    }
    const getYear = date[2]
    return `${getYear}-${getMonth}-${getDate}`
  }

  componentDidMount() {
    this.props.dispatch(getDate(this.getFormatDateNow()))
  }

  handleDayPress(day){
    this.props.dispatch(modalVisibleSet(true,'createAgenda',day))
  }
  handleDayPressed(day){
    this.props.dispatch(modalVisibleSet(true,'listEvents',day))
  }

  render() {
    return (
      <Calendar
        onDayPress={(day) => this.handleDayPress(day.dateString)}
        onDayLongPress={(day) => this.handleDayPressed(day.dateString)}
        markedDates={this.props.agenda.markedDate}
        style = {
          {
            borderWidth: 0,
            borderColor: 'gray',
            height: 458
          }
        }
        theme = {
          {
            arrowColor: 'blue',
            monthTextColor: 'black',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(Agenda);