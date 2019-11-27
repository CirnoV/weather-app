import React from 'react';
import Table from 'react-bootstrap/Table';

interface Props {
  tableData: WeatherTableData;
}

export type WeatherTableData = [[string, string, string], any[]][];

const WeatherTable: React.FC<Props> = ({ tableData }) => {
  const dataOrder = [
    '최고온도(°C)',
    '최저온도(°C)',
    '現 온도(°C)',
    '現 풍향',
    '現 풍속(m/s)',
    '누적 강우량',
    '일일 누적',
    '시간 강우량',
    '습도',
  ];
  return (
    <Table bordered striped size="sm">
      <thead>
        <tr>
          <th>구분</th>
          {tableData.map(([[location, time, link]]) => (
            <th>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {`${location} (${time})`}
              </a>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataOrder.map((type, idx) => (
          <tr>
            <td>{type}</td>
            {tableData.map(([, data]) => (
              <td>{data[idx]}</td>
            ))}
          </tr>
          ))}
      </tbody>
    </Table>
  )
};

export default WeatherTable;