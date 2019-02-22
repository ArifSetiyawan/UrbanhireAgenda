import React, { Component } from 'react';
import { LocaleConfig, Calendar, CalendarList } from 'react-native-calendars';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Title, Right, Content } from 'native-base';

import { modalVisibleSet , getDate } from '../../redux/actions/agenda';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

class Agenda extends Component {

  getFormatDateNow(){
    let date = new Date()
    date = date.toLocaleDateString('id')
    date = date.split('/')
    let getDate = date[0]
    if(getDate.length===1){
      getDate= `0${getDate}`
    }
    let getMonth = date[1]
    if(getMonth.length===1){
      getMonth= `0${getMonth}`
    }
    const getYear = date[2]
    return `${getYear}-${getMonth}-${getDate}`
  }

  componentDidMount() {
    this.props.dispatch(getDate(this.getFormatDateNow()))
  }

  handleDayPress(day){
    this.props.dispatch(modalVisibleSet(true,'listEvents',day))
  }

  render() {
    return (
            <Calendar
            current={Date()}
            onDayPress={(day) => this.handleDayPress(day.dateString)}
            markedDates={this.props.agenda.markedDate}
          />
    );
  }
}

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(Agenda);