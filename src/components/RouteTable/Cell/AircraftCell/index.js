import React from "react";
import PropTypes from "prop-types";

import TableCell from "@material-ui/core/TableCell";
import Box from "@material-ui/core/Box";

export default function AircraftCell({ column, row }) {
  const { icao, name } = column.getCellDisplayValue(row);
  return (
    <TableCell>
      <Box display="flex" flexDirection="column">
        <span>{icao}</span>
        <span>{name}</span>
      </Box>
    </TableCell>
  );
}

AircraftCell.propTypes = {
  column: PropTypes.shape({
    getCellDisplayValue: PropTypes.func,
  }).isRequired,
  row: PropTypes.shape({}).isRequired,
};
