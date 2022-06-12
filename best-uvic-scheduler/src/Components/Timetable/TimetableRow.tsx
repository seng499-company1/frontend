import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

export interface TimetableRowProps {
  slotTimes: Array<string>;
  timeslot: Array<boolean>;
  onTimeslots: React.Dispatch<{
    dayIdx: number;
    slotIdx: number;
  }>;
  timeslotIdx: number;
}

export interface TimetableRowViewProps {
  timeslot: Array<boolean>;
  slotTime: string;
  onTimeslots: React.Dispatch<{
    dayIdx: number;
    slotIdx: number;
  }>;
  timeslotIdx: number;
}

const CellDiv = styled.div<{ highlighted: boolean }>`
  width: 100%;
  border: 1px solid var(--border);
  border-bottom: none;

  min-width: 20px;

  background-color: white;

  &:hover {
    background-color: var(--primary-100);
    ${(props) => props.highlighted && "background-color: var(--primary-500)"}
  }

  ${(props) => props.highlighted && "background-color: var(--primary-400)"}
`;

const TimeDiv = styled.div`
  width: 100%;
  border-top: 1px solid var(--border);
  text-align: center;
  padding: var(--space-x-small) var(--space-med);
  box-sizing: border-box;
`;

function useTimetableRow(props: TimetableRowProps): TimetableRowViewProps {
  return {
    slotTime: props.slotTimes[props.timeslotIdx],
    timeslot: props.timeslot,
    onTimeslots: props.onTimeslots,
    timeslotIdx: props.timeslotIdx,
  };
}

export function TimetableRowView(props: TimetableRowViewProps) {
  const { slotTime, timeslot, onTimeslots, timeslotIdx } = props;

  return (
    <>
      <TimeDiv>{slotTime}</TimeDiv>
      {timeslot.map((slot: boolean, idx) => {
        return (
          <CellDiv
            key={`${idx}-${slot}`}
            onClick={() => onTimeslots({ dayIdx: idx, slotIdx: timeslotIdx })}
            highlighted={slot}
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
