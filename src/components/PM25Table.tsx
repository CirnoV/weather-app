import React from 'react';
import Table from 'react-bootstrap/Table';

interface Props {
  uri: string;
  pm10: string | number;
  pm25: string | number;
}

const PM25Table: React.FC<Props> = ({ uri, pm10, pm25 }) => {
  return (
    <Table bordered size="sm">
      <tbody>
        <tr>
          <th>
            <a href={uri} target="_blank" rel="noopener noreferrer">
              미세먼지
            </a>  
          </th>
          <th>{pm10}</th>
          <th>
            <a href={uri} target="_blank" rel="noopener noreferrer">
              초미세먼지
            </a>  
          </th>
          <th>{pm25}</th>
        </tr>
      </tbody>
    </Table>
  )
};

export default PM25Table;