import {format} from 'date-fns';
import React from 'react';

export const Cell = ({data}) => {
  if (!data.createdAt) {
    return null;
  }
  const date = format(new Date(data.createdAt), 'MM/dd/yyyy');
  const text = data.text;
  return <tr key={text}>
    <td style={{width: 150 + 'px'}}>{date}</td>
    <td style={{width: 250 + 'px'}}>{text}</td>
  </tr>
}

export const EmptyCell = () => {
  return <tr>
    <td style={{width: 150 + 'px', height: 50 + 'px'}}></td>
    <td style={{width: 250 + 'px', height: 50 + 'px'}}></td>
  </tr>
}