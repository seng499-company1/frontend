import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { updateTimeslotsAction } from "./Timetable";

export interface TimetableRowProps {
  slotTimes: Array<string>;
  timeslot: Array<boolean>;
  onTimeslots: React.Dispatch<updateTimeslotsAction>;
  timeslotIdx: number;
  mouseDown: boolean;
}

export interface TimetableRowViewProps {
  timeslot: Array<boolean>;
  slotTime: string;
  onTimeslots: React.Dispatch<updateTimeslotsAction>;
  timeslotIdx: number;
  mouseDown: boolean;
}

const CellDiv = styled.div<{ highlighted: boolean }>`
  width: 100%;
  border: 1px solid var(--border);
  border-bottom: none;
  min-width: 20px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-100);
    ${(props) => props.highlighted && "background-color: var(--primary-500)"}
  }

  &:active {
    background-color: var(--primary-400);
    ${(props) => props.highlighted && "background-color: white"}
  }

  ${(props) => props.highlighted && "background-color: var(--primary-400)"}
`;

const TimeDiv = styled.div`
  width: 100%;
  border-top: 1px solid var(--border);
  text-align: center;
  padding: var(--space-x-small) var(--space-med);
  box-sizing: border-box;
  user-select: none;
`;

function useTimetableRow(props: TimetableRowProps): TimetableRowViewProps {
  return {
    slotTime: props.slotTimes[props.timeslotIdx],
    timeslot: props.timeslot,
    onTimeslots: props.onTimeslots,
    timeslotIdx: props.timeslotIdx,
    mouseDown: props.mouseDown,
  };
}

export function TimetableRowView(props: TimetableRowViewProps) {
  const { slotTime, timeslot, onTimeslots, timeslotIdx, mouseDown } = props;

  return (
    <>
      <TimeDiv>{slotTime}</TimeDiv>
      {timeslot.map((slot: boolean, idx) => {
        return (
          <CellDiv
            draggable="false"
            key={`${idx}-${slot}`}
            onClick={(e) => {
              onTimeslots({ dayIdx: idx, slotIdx: timeslotIdx });
              e.stopPropagation();
            }}
            highlighted={slot}
            onMouseLeave={() => {
              mouseDown && onTimeslots({ dayIdx: idx, slotIdx: timeslotIdx });
            }}
          >
            {" "}
          </CellDiv>
        );
      })}
    </>
  );
}

export const TimetableRow = (props: TimetableRowProps) => {
  return <TimetableRowView {...useTimetableRow(props)} />;
};
