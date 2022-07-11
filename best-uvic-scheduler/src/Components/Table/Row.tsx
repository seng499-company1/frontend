import React from "react";
import styled from "styled-components";

export interface RowProps {
  availible: {
    time: string;
    day: {
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
    };
  };
  children: React.ReactNode;
}

export interface TimeEntryProps {
  highlighted: boolean;
  children: React.ReactNode;
}

const RowDiv = styled.td<{ highlighted: boolean }>`
  width: 100%;
  border: 2px solid #000;

  ${(props) =>
    props.highlighted
      ? "background-color: var(--primary)"
      : "background-color: white"};
`;

const TimeDiv = styled.td`
  width: 100%;
  border: 2px solid #000;
  text-align: center;
`;

export function TimeEntry(props: TimeEntryProps) {
  return <RowDiv {...props}></RowDiv>;
}

export function Row(props: RowProps) {
  return (
    <tr>
      <TimeDiv>{props.availible.time}</TimeDiv>
      <TimeEntry highlighted={props.availible.day.monday}>
        {props.children}
      </TimeEntry>
      <TimeEntry highlighted={props.availible.day.tuesday}>
        {props.children}
      </TimeEntry>
      <TimeEntry highlighted={props.availible.day.wednesday}>
        {props.children}
      </TimeEntry>
      <TimeEntry highlighted={props.availible.day.thursday}>
        {props.children}
      </TimeEntry>
      <TimeEntry highlighted={props.availible.day.friday}>
        {props.children}
      </TimeEntry>
    </tr>
  );
}
