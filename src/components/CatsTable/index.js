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
        <thead>
        <tr>
          <td>Date</td>
          <td>Text</td>
        </tr>
        </thead>
        <tbody>
        {catsWithCells.map((cat, index) => {
          if (cat === null) {
            return <EmptyCell key={`empty-${index}`}/>
          }
          return <Cell data={cat} key={cat.text}/>
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