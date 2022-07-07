import React, { useContext, useState } from "react";
import { TimetableRow } from "./TimetableRow.tsx";
import styled from "styled-components";
import "../../index.css";
import { TimetableContext } from "../../Pages/ProfessorDataInput/index.tsx";
import { weekdays } from "../../Pages/ProfessorDataInput/ProfessorTimetable.tsx";
// The table subcomponent is responsible for:

export interface TimetableViewProps {
  weekdays: Array<string>;
  slotTimes: Array<string>;
  timetable: Array<boolean>;
  setTimetables: any;
  semester: string;
  mouseDown: boolean;
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const slotTimes = [
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

export interface TimetableProps {
  semester: string;
}

const TableDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px repeat(5, minmax(0, 1fr));
  gap: var(--space-2x-small);
  background: #fff;
`;

const DayHeaderP = styled.p`
  margin: 0;
  color: var(--font-color);
  padding: var(--space-2x-small) var(--space-med);
  box-sizing: border-box;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

function useTimetable(props: TimetableProps): TimetableViewProps {
  const { semester } = props;

  const { timetables, setTimetables } = useContext(TimetableContext);
  const [mouseDown, setMouseDown] = useState(false);

  return {
    semester,
    slotTimes,
    weekdays,
    timetable: timetables[semester],
    setTimetables,
    mouseDown,
    setMouseDown,
  };
}

export function TimetableView(props: TimetableViewProps) {
  const {
    semester,
    slotTimes,
    weekdays,
    timetable,
    setTimetables,
    mouseDown,
    setMouseDown,
  } = props;

  return (
    <TableDiv
      draggable="false"
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => {
        setMouseDown(false);
      }}
      onMouseLeave={() => setMouseDown(false)}
    >
      <div style={{ position: "sticky", top: "0px" }}> </div>
      {weekdays.map((day: string) => {
        return <DayHeaderP key={day}>{day}</DayHeaderP>;
      })}

      {timetable.map((timeslot, idx) => (
        <TimetableRow
          draggable="false"
          slotTimes={slotTimes}
          timeslot={timeslot}
          onTimeslots={setTimetables}
          timeslotIdx={idx}
          semester={semester}
          key={`row-${idx}`}
          mouseDown={mouseDown}
        ></TimetableRow>
      ))}
    </TableDiv>
  );
}

export const Timetable = (props: TimetableProps) => {
  return <TimetableView {...useTimetable(props)} />;
};
