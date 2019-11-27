import React from 'react';
import Table from 'react-bootstrap/Table';

interface Props {
  uri: string;
  forestFire: number;
}

const ForestFireTable: React.FC<Props> = ({ uri, forestFire }) => {
  return (
    <Table bordered size="sm">
      <tbody>
        <tr>
          <th>
            <a href={uri} target="_blank" rel="noopener noreferrer">
              산불지수
            </a>  
          </th>
          <th>{forestFire.toFixed(1)}</th>
        </tr>
      </tbody>
    </Table>
  )
};

export default ForestFireTable;