import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// #region Sample data
const data = [
  {
    subject: 'Speaking',
    A: 90,
    B: 10,
    fullMark: 150,
  },
  {
    subject: 'CP',
    A: 70,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Brainrotting',
    A: 50,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Developing',
    A: 100,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'CGPA',
    A: 60,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Trips',
    A: 100,
    B: 85,
    fullMark: 150,
  },
];

// #endregion
const SimpleRadarChart = () => {
  return (
    <RadarChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      outerRadius="80%"
      data={data}
      margin={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#14d6d2" fillOpacity={0.4} />
    </RadarChart>
  );
};

export default SimpleRadarChart;