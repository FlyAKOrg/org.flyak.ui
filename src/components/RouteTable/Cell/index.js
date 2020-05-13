import React from "react";
import PropTypes from "prop-types";

import { Table } from "@devexpress/dx-react-grid-material-ui";

import AircraftCell from "./AircraftCell";
import LocationCell from "./LocationCell";

export default function Cell(props) {
  const { column } = props;
  if (column.name === "aircraft") {
    return <AircraftCell {...props} />;
  }
  if (column.name === "departure" || column.name === "arrival") {
    return <LocationCell {...props} />;
  }
  if (column) return <Table.Cell {...props} />;
}

Cell.propTypes = {
  row: PropTypes.shape({}).isRequired,
  column: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
