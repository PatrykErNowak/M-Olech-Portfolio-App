export const data = {
  dashboards: [
    {
      title: 'Northwind Traders',
      desc: "A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",
      img: {
        src: new URL('../img/dashboard-2.png', import.meta.url),
        alt: 'KPI Dashboard for Northwind Traders',
      },
      themePhoto: {
        src: new URL('../img/projects/northwind-photo.jpg', import.meta.url),
        alt: 'Container ship in the middle of the sea',
      },
      links: {
        live: '#',
        source: '#',
      },
    },
    {
      title: 'Airline Passengers Satisfaction',
      desc: 'Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.',
      img: {
        src: new URL('../img/dashboard-1.png', import.meta.url),
        alt: '',
      },
      themePhoto: {
        src: new URL(
          '../img/projects/airlinepassengers-photo.jpg',
          import.meta.url,
        ),
        alt: 'Passenger with suitcase walking through airport, standing passenger aircraft visible in background.',
      },
      links: {
        live: '#',
        source: '#',
      },
    },
  ],
};
