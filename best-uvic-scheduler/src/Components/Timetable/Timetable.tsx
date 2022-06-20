import React, { useContext } from "react";
import { TimetableRow } from "./TimetableRow.tsx";
import styled from "styled-components";

import "../../index.css";
import { TimetableContext } from "../../Pages/ProfessorDataInput/index.tsx";
// The table subcomponent is responsible for:

export interface TimetableViewProps {
  weekdays: Array<string>;
  slotTimes: Array<string>;
  timetable: Array<boolean>;
  setTimetables: any;
  semester: string;
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const slotTimes = [
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
];

export interface TimetableProps {
  semester: string;
}

const TableDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px repeat(5, minmax(0, 1fr));
  border-bottom: 1px solid var(--border);
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

  return {
    semester,
    slotTimes,
    weekdays,
    timetable: timetables[semester],
    setTimetables,
  };
}

export function TimetableView(props: TimetableViewProps) {
  const { semester, slotTimes, weekdays, timetable, setTimetables } = props;

  return (
    <TableDiv>
      <div style={{ position: "sticky", top: "0px" }}> </div>
      {weekdays.map((day: string) => {
        return <DayHeaderP>{day}</DayHeaderP>;
      })}

      {timetable.map((timeslot, idx) => (
        <TimetableRow
          slotTimes={slotTimes}
          timeslot={timeslot}
          onTimeslots={setTimetables}
          timeslotIdx={idx}
          semester={semester}
        ></TimetableRow>
      ))}
    </TableDiv>
  );
}

export const Timetable = (props: TimetableProps) => {
  return <TimetableView {...useTimetable(props)} />;
};
