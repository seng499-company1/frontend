// Generating valid table cells from passed in children including their styling.
// We will need to map through the children passed to the row subcomponent to accomplish this.
// Organizing the cells within a row
import React from "react";
import styled from "styled-components";

export interface row {
  children: React.ReactNode;
}

export interface rowView {
  children: React.ReactNode;
}
