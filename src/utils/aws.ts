import { WeatherTableData } from "../components/WeatherTable";

export interface WindDirection {
  각도: number;
  방위명: string;
}

export enum AWSLocation {
  원통 = 321,
  서화 = 594,
  진부령 = 595,
  향로봉 = 320,
  인제 = 211,
}

export interface AWS {
  지역: string;
  출처: string;
  관측시각: string;
  강수: string;
  강수15: number;
  강수60: number;
  강수3H: number;
  강수6H: number;
  강수12H: number;
  일강수: number;
  기온: number;
  풍향1: WindDirection;
  풍속1: number;
  풍향10: WindDirection;
  풍속10: number;
  습도?: number;
  해변기압?: number;
}

const locationOrder = [
  "원통",
  "향로봉",
  "진부령",
  "서화",
  "인제",
];

export function parseAWSData(data: AWS[], rootData: AWS[][]): WeatherTableData {
  let result: WeatherTableData = [];

  data.forEach(aws => {
    const tableData: any[] = [];

    const temperature: number[] = rootData.flatMap(e => e.filter(r => r.지역 === aws.지역).map(r => r.기온));
    tableData.push(Math.round(Math.max(...temperature)));
    tableData.push(Math.round(Math.min(...temperature)));
    tableData.push(Math.round(aws.기온));
    tableData.push(aws.풍향10.방위명);
    tableData.push(aws.풍속10);
    // tableData.push('-');
    // tableData.push('-');
    let prevRain = rootData.flatMap(e => e.filter(r => r.지역 === aws.지역).map(r => r.일강수)).pop();
    tableData.push(`${aws.일강수 - (prevRain || 0)}`);
    tableData.push(aws.습도 || '-');

    result.push([[aws.지역, aws.관측시각, aws.출처], tableData]);
  });

  result = result.sort(([[a]], [[b]]) => locationOrder.indexOf(a) - locationOrder.indexOf(b));

  return result;
}
