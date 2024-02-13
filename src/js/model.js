export const data = {
  numericSystem: [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
  ],

  dashboards: [
    {
      title: 'Northwind Traders',
      desc: "A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",
      img: {
        src: new URL('../img/dashboard-2.png', import.meta.url),
        alt: 'KPI Dashboard for Northwind Traders',
      },
    },
    {
      title: 'Airline Passengers Satisfaction',
      desc: 'Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.',
      img: {
        src: new URL('../img/dashboard-1.png', import.meta.url),
        alt: '',
      },
    },
  ],
};
