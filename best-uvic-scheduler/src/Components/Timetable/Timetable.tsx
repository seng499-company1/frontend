import { number } from "prop-types";
import React, { useReducer, useState } from "react";
import { TimetableRow } from "./TimetableRow";
import CheckboxGroup, { CheckboxView } from "../checkbox/checkbox";
import styled from "styled-components";

import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

// export interface TimetableProps {
//   header: Array<string>;
//   availible: [
//     {
//       time: string;
//       day: {
//         monday: boolean;
//         tuesday: boolean;
//         wednesday: boolean;
//         thursday: boolean;
//         friday: boolean;
//       };
//     }
//   ];
// }

export interface TimetableViewProps {
  weekdays: Array<string>;
  slotTimes: Array<string>;
  fullDays: Array<boolean>;
  timeslots: Array<Array<boolean>>;
  onFullDays: React.Dispatch<{
    dayIdx: number;
  }>;
  onTimeslots: React.Dispatch<{
    dayIdx: number;
    slotIdx: number;
  }>;
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

export interface TimetableProps {}

const TableDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px repeat(5, 1fr);
  border-bottom: 1px solid var(--border);
`;

const AvDiv = styled.div`
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const DayHeaderP = styled.p`
  margin: 0;
  color: var(--font-color);
  padding: var(--space-2x-small) var(--space-med);
  box-sizing: border-box;
  text-align: center;
`;

const CheckboxLabelP = styled.p`
  padding: var(--space-2x-small) var(--space-med);
  box-sizing: border-box;
  color: var(--font-color);
  margin: auto;
`;

function updateFullDays(state: Array<boolean>, action: { dayIdx: number }) {
  const newState = state.map((day: boolean, idx: number) => {
    return idx === action.dayIdx ? !day : day;
  });
  return newState;
}

function updateTimeslots(
  state: Array<Array<boolean>>,
  action: { dayIdx: number; slotIdx: number }
) {
  console.log(action);

  const newState = state.map((slot: Array<boolean>, slotIdx: number) => {
    if (slotIdx !== action.slotIdx) {
      return slot;
    } else {
      const newSlotState = slot.map((day: boolean, idx: number) => {
        return idx === action.dayIdx ? !day : day;
      });
      return newSlotState;
    }
  });

  return newState;
}

function useTimetable(props: TimetableProps): TimetableViewProps {
  const initTimeslots = Array(24)
    .fill(false)
    .map(() => new Array(5).fill(false));

  const initFullDays = Array(5).fill(false);

  const [fullDays, onFullDays] = useReducer(updateFullDays, initFullDays);

  const [timeslots, onTimeslots] = useReducer(updateTimeslots, initTimeslots);

  return {
    slotTimes,
    weekdays,
    onFullDays,
    fullDays,
    timeslots,
    onTimeslots,
  };
}

export function TimetableView(props: TimetableViewProps) {
  const { slotTimes, weekdays, onFullDays, fullDays, timeslots, onTimeslots } =
    props;

  return (
    <TableDiv>
      <div> </div>
      {weekdays.map((day: string) => {
        return <DayHeaderP>{day}</DayHeaderP>;
      })}

      <CheckboxLabelP>Preferred Day</CheckboxLabelP>
      {fullDays.map((day: boolean, idx: number) => {
        return (
          <AvDiv>
            <CheckboxGroup.Checkbox
              onClick={() => onFullDays({ dayIdx: idx })}
              checked={day}
            />
          </AvDiv>
        );
      })}

      {timeslots.map((timeslot, idx) => (
        <TimetableRow
          slotTimes={slotTimes}
          timeslot={timeslot}
          onTimeslots={onTimeslots}
          timeslotIdx={idx}
        ></TimetableRow>
      ))}
    </TableDiv>
  );
}

export const Timetable = (props: TimetableProps) => {
  return <TimetableView {...useTimetable(props)} />;
};
