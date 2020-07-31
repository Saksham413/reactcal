//react scheduler
import React from 'react';
import './App.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda,
  ViewsDirective, ViewDirective, 
  TimelineViews, TimelineMonth, EventSettingsModel } from '@syncfusion/ej2-react-schedule';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import {L10n} from '@syncfusion/ej2-base';

L10n.load({
  'en-US':{
    'schedule': {
      'saveButton': 'Add',
      'cancelButton': 'Close',
      'deleteButton': 'Remove',
      'newEvent': 'Event'
    }
  }
})

class App extends React.Component{
  // private localData: EventSettingsModel={
  //   dataSource: [{
  //     End: new Date(2020, 6, 11, 6, 30),
  //     Start: new Date(2020, 6, 11, 4, 0),
  //     Instructor: '',
  //     RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
  //   }],
  //   fields: {
  //     subject: { name: 'Instructor' , default: 'No title'},
  //     startTime: { name: 'Start' },
  //     endTime: { name: 'End' }
  //   }
  // };
  private localData = [
    {
      Id:1,
      Subject: 'John',
      StartTime: new Date(2020, 6, 7, 6, 0),
      EndTime: new Date(2020, 6, 7, 7, 0),
      Description: 'sjhdjs',
      IsReadonly: true
    },
    {
      Id:2,
      Subject: 'Steve',
      StartTime: new Date(2020, 6, 8, 8, 0),
      EndTime: new Date(2020, 6, 8, 9, 0),
      Description: 'shdgsh',
      IsReadonly: true
    },
    {
      Id:3,
      Subject: 'Ramdev',
      StartTime: new Date(2020, 6, 7, 5, 0),
      EndTime: new Date(2020, 6, 7, 6, 0),
      Description: 'sjhdjs',
      IsReadonly: true
    }
  ]
  private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  private editorWindowTemplate(props: any): JSX.Element {
    return (<table className="custom-event-editor">
      <tbody>
      <tr> 
          <td className="e-textlabel">Full Name</td>
          <td><input id="Full Name" name="Full Name" type="text"/></td>
        </tr>
        <tr>
          <td className="e-textlabel">Email</td>
          <td>
          <textarea id="Email" name="Email"
          rows={1} cols={30}></textarea>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">From</td>
          <td>
          <DateTimePickerComponent id="StartTime" data-name="StartTime"
          value={new Date(props.startTime || props.StartTime)}>
          </DateTimePickerComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">To</td>
          <td>
          <DateTimePickerComponent id="EndTime" data-name="EndTime"
          value={new Date(props.endTime || props.EndTime)}>
          </DateTimePickerComponent>
          </td>
        </tr>
      </tbody>
    </table>
    )
  }

  public render(){
    // return <ScheduleComponent currentView='MonthAgenda' selectedDate={new Date(2020, 6, 11)}
    // eventSettings={{ dataSource: this.localData}}>
    //   <ViewsDirective>
    //     <ViewDirective option='Day'></ViewDirective>
    //     <ViewDirective option='TimelineMonth'></ViewDirective>
    //     <ViewDirective option='Month'></ViewDirective>
    //     <ViewDirective option='MonthAgenda' isSelected={true}></ViewDirective>
    //   </ViewsDirective>
    //   <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth]} />
    // </ScheduleComponent>
    return(
      <ScheduleComponent height = '550px'
      eventSettings={{dataSource: this.localData}}
      //views={['Day', 'Month', 'MonthAgenda', 'TimelineWeek']}
      views={['MonthAgenda']}
      editorTemplate={this.editorWindowTemplate.bind(this)}>
      <Inject services={[Day, Month, MonthAgenda, TimelineMonth]}/>
    </ScheduleComponent>
    )
  }
}

export default App;
