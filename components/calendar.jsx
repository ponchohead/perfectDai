import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";


const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const myEventsList = [
    {
      title: "today",
      start: new Date("2021-09-05 10:22:00"),
      end: new Date("2021-09-05 10:42:00"),
    },
    {
      title: "Viva México",
      start: new Date("2021-09-15 12:22:00"),
      end: new Date("2021-09-15 13:42:00"),
    },
  ]

export const MyCalendar = props => (
  <div>
    {/* <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
    /> */}

    <DnDCalendar
      defaultDate={moment().toDate()}
      defaultView="month"
      events={myEventsList}
      localizer={localizer}
      resizable={true}
      selectable={true}
      style={{ height: "90vh" }}
    />    

   
  </div>
)