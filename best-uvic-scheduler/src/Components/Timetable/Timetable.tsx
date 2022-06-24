import { number } from "prop-types";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { TimetableRow } from "./TimetableRow.tsx";
import CheckboxGroup, { CheckboxView } from "../checkbox/checkbox.tsx";
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
  timeSlotState: Array<Array<boolean>>;
  onFullDays: React.Dispatch<{
    dayIdx: number;
  }>;
  onTimeslots: React.Dispatch<updateTimeslotsAction>;
  mouseDown: boolean;
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
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
  timetableContext: React.Context<{
    timetables: {};
    setTimetables: (_timetables: {}) => void;
  }>;
  prefDayContext: React.Context<{
    prefDays: {};
    setPrefDays: (_prefDays: {}) => void;
  }>;
}

const TableDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px repeat(5, minmax(0, 1fr));
  border-bottom: 1px solid var(--border);
  background: #fff;
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
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const CheckboxLabelP = styled.p`
  padding: var(--space-2x-small) var(--space-med);
  box-sizing: border-box;
  color: var(--font-color);
  margin: auto;
`;

const initTimeslots = Array(24)
  .fill(false)
  .map(() => new Array(5).fill(false));

const initFullDays = Array(5).fill(false);

export type updateFullDaysAction =
  | { dayIdx: number; fullState?: never }
  | { dayIdx?: never; fullState: Array<boolean> };

function updateFullDays(state: Array<boolean>, action: updateFullDaysAction) {
  if (action.fullState) {
    return action.fullState;
  } else {
    const newState = state.map((day: boolean, idx: number) => {
      return idx === action.dayIdx ? !day : day;
    });
    return newState;
  }
}

export type updateTimeslotsAction =
  | { dayIdx: number; slotIdx: number; fullState?: never }
  | { dayIdx?: never; slotIdx?: never; fullState: Array<Array<boolean>> };

function updateTimeslots(
  state: Array<Array<boolean>>,
  action: updateTimeslotsAction
) {
  if (action.fullState) {
    return action.fullState;
  } else {
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
}

function useTimetable(props: TimetableProps): TimetableViewProps {
  const { semester, timetableContext, prefDayContext } = props;

  const [fullDays, onFullDays] = useReducer(updateFullDays, initFullDays);

  const [timeslots, onTimeslots] = useReducer(updateTimeslots, initTimeslots);

  const { timetables, setTimetables } = useContext(timetableContext);
  const { prefDays, setPrefDays } = useContext(prefDayContext);

  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    setTimetables({ ...(timetables || {}), [semester]: timeslots });
  }, [timeslots]);

  useEffect(() => {
    setPrefDays({ ...(prefDays || {}), [semester]: fullDays });
  }, [fullDays]);

  useEffect(() => {
    if (timetables[semester] !== undefined) {
      onTimeslots({ fullState: timetables[semester] });
    } else {
      onTimeslots({ fullState: initTimeslots });
    }
    if (prefDays[semester] !== undefined) {
      onFullDays({ fullState: prefDays[semester] });
    } else {
      onFullDays({ fullState: initFullDays });
    }
  }, [semester]);

  return {
    slotTimes,
    weekdays,
    onFullDays,
    fullDays,
    timeSlotState: timeslots,
    onTimeslots,
    mouseDown,
    setMouseDown,
  };
}

export function TimetableView(props: TimetableViewProps) {
  const {
    slotTimes,
    weekdays,
    onFullDays,
    fullDays,
    timeSlotState: timeslots,
    onTimeslots,
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
          draggable="false"
          slotTimes={slotTimes}
          timeslot={timeslot}
          onTimeslots={onTimeslots}
          timeslotIdx={idx}
          mouseDown={mouseDown}
        ></TimetableRow>
      ))}
    </TableDiv>
  );
}

export const Timetable = (props: TimetableProps) => {
  return <TimetableView {...useTimetable(props)} />;
};
