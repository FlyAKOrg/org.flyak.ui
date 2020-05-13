import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

import {
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableColumnVisibility,
  TableFilterRow,
} from "@devexpress/dx-react-grid-material-ui";
import Cell from "./Cell";

const columns = [
  {
    name: "id",
    title: "",
  },
  {
    name: "flightNumberInt",
    title: "",
    getCellValue: (row) => row.flightNumber,
  },
  {
    name: "flightNumber",
    title: "Flight No.",
    getCellValue: (row) =>
      row.airline ? `${row.airline.icao}${row.flightNumber}` : undefined,
  },
  {
    name: "departure",
    title: "Departure",
    getCellValue: (row) => (row.departure ? row.departure.icao : undefined),
    getCellDisplayValue: (row) => row.departure,
  },
  {
    name: "arrival",
    title: "Arrival",
    getCellValue: (row) => (row.arrival ? row.arrival.icao : undefined),
    getCellDisplayValue: (row) => row.arrival,
  },
  {
    name: "aircraft",
    title: "Aircraft",
    getCellValue: (row) => (row.equipment ? row.equipment.icao : undefined),
    getCellDisplayValue: (row) => row.equipment,
  },
  {
    name: "duration",
    title: "Flight Duration",
  },
];

const getRowId = (row) => row.id;
const Root = (props) => <Grid.Root {...props} style={{ height: "100%" }} />;

export default function RouteTable({ routes }) {
  return (
    <Paper>
      <Grid
        rows={routes}
        columns={columns}
        getRowId={getRowId}
        rootComponent={Root}
      >
        <SortingState
          defaultSorting={[{ columnName: "flightNumberInt", direction: "asc" }]}
        />
        <FilteringState
          defaultFilters={[]}
          columnExtensions={[
            { columnName: "duration", filteringEnabled: false },
          ]}
        />
        <IntegratedSorting />
        <IntegratedFiltering />
        <VirtualTable cellComponent={Cell} height="auto" />
        <TableHeaderRow />
        <TableFilterRow />
        <TableColumnVisibility
          defaultHiddenColumnNames={["id", "flightNumberInt"]}
        />
      </Grid>
    </Paper>
  );
}

RouteTable.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      flightNumber: PropTypes.number.isRequired,
      departure: PropTypes.shape({
        icao: PropTypes.string.isRequired,
      }),
      arrival: PropTypes.shape({
        icao: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
