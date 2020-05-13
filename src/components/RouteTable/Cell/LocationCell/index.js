import React from "react";
import PropTypes from "prop-types";

import TableCell from "@material-ui/core/TableCell";
import Box from "@material-ui/core/Box";

export default function LocationCell({ column, row }) {
  const { icao, name } = column.getCellDisplayValue(row);
  return (
    <TableCell>
      <Box display="flex" flexDirection="column">
        <span>{icao}</span>
        <Box clone css={{ textTransform: "capitalize" }}>
          <span>{name.toLowerCase()}</span>
        </Box>
      </Box>
    </TableCell>
  );
}

LocationCell.propTypes = {
  column: PropTypes.shape({
    getCellDisplayValue: PropTypes.func,
  }).isRequired,
  row: PropTypes.shape({}).isRequired,
};
