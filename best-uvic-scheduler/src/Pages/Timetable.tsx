import React, { useCallback, useEffect, useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { TimetableItemType } from "./AdminPages/GenerateSchedule.tsx";

type event = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
};

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 7, 0),
    end: new Date(2022, 7, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2022, 7, 7),
    end: new Date(2022, 7, 10),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2022, 2, 13, 0, 0, 0),
    end: new Date(2022, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2022, 10, 6, 0, 0, 0),
    end: new Date(2022, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2022, 7, 9, 0, 0, 0),
    end: new Date(2022, 7, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2022, 7, 11),
    end: new Date(2022, 7, 13),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2022, 7, 12, 10, 30, 0, 0),
    end: new Date(2022, 7, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2022, 7, 12, 12, 0, 0, 0),
    end: new Date(2022, 7, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2022, 7, 12, 14, 0, 0, 0),
    end: new Date(2022, 7, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2022, 7, 12, 17, 0, 0, 0),
    end: new Date(2022, 7, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2022, 7, 12, 20, 0, 0, 0),
    end: new Date(2022, 7, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2022, 7, 13, 8, 0, 0),
    end: new Date(2022, 7, 13, 10, 30, 0),
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: new Date(2022, 7, 13, 9, 30, 0),
    end: new Date(2022, 7, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2022, 7, 13, 11, 30, 0),
    end: new Date(2022, 7, 13, 14, 0, 0),
  },
  {
    id: 11.3,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2022, 7, 13, 15, 30, 0),
    end: new Date(2022, 7, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2022, 7, 17, 19, 30, 0),
    end: new Date(2022, 7, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2022, 7, 17, 19, 30, 0),
    end: new Date(2022, 7, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2022, 7, 20, 19, 30, 0),
    end: new Date(2022, 7, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2022, 7, 14, 15, 30, 0),
    end: new Date(2022, 7, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2022, 7, 14, 16, 30, 0),
    end: new Date(2022, 7, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2022, 7, 14, 16, 30, 0),
    end: new Date(2022, 7, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2022, 7, 14, 17, 30, 0),
    end: new Date(2022, 7, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2022, 7, 14, 17, 0, 0),
    end: new Date(2022, 7, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2022, 7, 14, 17, 0, 0),
    end: new Date(2022, 7, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2022, 7, 14, 17, 30, 0),
    end: new Date(2022, 7, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: "Go to the gym",
    start: new Date(2022, 7, 14, 18, 30, 0),
    end: new Date(2022, 7, 14, 20, 0, 0),
  },
];

export interface TimetableViewProps {
  defaultDate: any;
  myEvents: Array<event>;
  moveEvent: any;
  resizeEvent: any;
  localizer: any;
  formats: any;
}
export interface TimetableProps {
  events: TimetableItemType[];
  eventUpdateCallback: any;
}

const DragAndDropCalendar = withDragAndDrop(Calendar);

function useTimetable(props: TimetableProps): TimetableViewProps {
  const [myEvents, setMyEvents] = useState(props.events);

  useEffect(() => {
    setMyEvents(props.events);
  }, [props]);

  const localizer = momentLocalizer(moment);

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        props.eventUpdateCallback([...filtered, { ...existing, start, end }]);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        props.eventUpdateCallback([...filtered, { ...existing, start, end }]);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );

  const formats = {
    dayFormat: (date, culture, localizer) =>
      localizer.format(date, "ddd", culture),
    eventTimeRangeFormat: () => {
      return "";
    },
  };

  return {
    myEvents,
    moveEvent,
    resizeEvent,
    defaultDate: "07/25/2022",
    localizer,
    formats,
  };
}

function TimetableView(props: TimetableViewProps) {
  const { myEvents, moveEvent, resizeEvent, defaultDate, localizer, formats } =
    props;
  return (
    <div style={{ height: "600px" }}>
      <DragAndDropCalendar
        localizer={localizer}
        defaultDate={defaultDate}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 22, 0, 0)}
        defaultView={Views.WORK_WEEK}
        views={["week", "day", "work_week"]}
        toolbar={false}
        events={myEvents}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        formats={formats}
        popup
        resizable
      />
    </div>
  );
}

const Timetable = (props: TimetableProps) => {
  return <TimetableView {...useTimetable(props)} />;
};

export default Timetable;
