import React from "react";
import styled from "styled-components";

export interface TimetableRowProps {
  slotTimes: Array<string>;
  timeslot: Array<boolean>;
  onTimeslots: React.Dispatch<{
    dayIdx: number;
    slotIdx: number;
    semester: string;
  }>;
  timeslotIdx: number;
  semester: string;
  mouseDown: boolean;
}

export interface TimetableRowViewProps {
  timeslot: Array<boolean>;
  slotTime: string;
  onTimeslots: React.Dispatch<{
    dayIdx: number;
    slotIdx: number;
    semester: string;
  }>;
  timeslotIdx: number;
  semester: string;
  mouseDown: boolean;
}

const CellDiv = styled.div<{ highlighted: boolean }>`
  width: 100%;
  min-width: 20px;
  background-color: var(--grey-50);
  cursor: pointer;

  &:hover {
    background-color: var(--primary-100);
    ${(props) => props.highlighted && "background-color: var(--primary-500)"}
  }

  &:active {
    background-color: var(--primary-400);
    ${(props) => props.highlighted && "background-color: var(--grey-50)"}
  }

  ${(props) => props.highlighted && "background-color: var(--primary-400)"}
`;

const TimeDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: var(--space-3x-small) var(--space-med);
  box-sizing: border-box;
  user-select: none;
`;

function useTimetableRow(props: TimetableRowProps): TimetableRowViewProps {
  return {
    slotTime: props.slotTimes[props.timeslotIdx],
    timeslot: props.timeslot,
    onTimeslots: props.onTimeslots,
    timeslotIdx: props.timeslotIdx,
    semester: props.semester,
    mouseDown: props.mouseDown,
  };
}

export function TimetableRowView(props: TimetableRowViewProps) {
  const { semester, slotTime, timeslot, onTimeslots, timeslotIdx, mouseDown } =
    props;

  return (
    <>
      <TimeDiv>{slotTime}</TimeDiv>
      {timeslot.map((slot: boolean, idx) => {
        return (
          <CellDiv
            draggable="false"
            key={`${idx}-${slot}`}
            onClick={(e) => {
              onTimeslots({
                dayIdx: idx,
                slotIdx: timeslotIdx,
                semester: semester,
              });
              e.stopPropagation();
            }}
            highlighted={slot}
            onMouseLeave={() => {
              mouseDown &&
                onTimeslots({
                  dayIdx: idx,
                  slotIdx: timeslotIdx,
                  semester: semester,
                });
            }}
            onMouseUp={() => {
              mouseDown &&
                onTimeslots({
                  dayIdx: idx,
                  slotIdx: timeslotIdx,
                  semester: semester,
                });
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
