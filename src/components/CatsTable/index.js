import React from 'react';
import PropTypes from 'prop-types';
import {getCatsWithEmptyCells} from "../../lib/helpers";
import {Cell, EmptyCell} from "./Cell";

const CatsTable = ({data, totalCount}) => {
  if (!data) {
    return null
  }
  const cats = Array.isArray(data) ? data : [data];
  const catsWithCells = getCatsWithEmptyCells(cats, totalCount);

  return (
      <table>
        <tr>
          <td>Date</td>
          <td>Text</td>
        </tr>
        <tbody>
        {catsWithCells.map(cat => {
          if (cat === null) {
            return <EmptyCell/>
          }
          return <Cell data={cat}/>
        })}
        </tbody>
      </table>
  );
};

CatsTable.propTypes = {
  data: PropTypes.array.isRequired,
  totalCount: PropTypes.number
};

export default CatsTable;