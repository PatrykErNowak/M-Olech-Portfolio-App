export const data = {
  dashboards: [
    {
      title: 'Northwind Traders',
      desc: "A top-level KPI dashboard made to help Northwind Traders' executives quickly understand the company's performance in key areas.",
      img: {
        src: new URL(
          '../img/projects/northwind-dashboard.jpg',
          import.meta.url,
        ),
        srcMobile: new URL(
          '../img/projects/northwind-dashboard-mobile.jpg',
          import.meta.url,
        ),
        alt: 'KPI Dashboard for Northwind Traders',
      },
      themePhoto: {
        src: new URL('../img/projects/northwind-photo.jpg', import.meta.url),
        alt: 'Container ship in the middle of the sea',
      },
      links: {
        live: 'https://app.powerbi.com/view?r=eyJrIjoiM2JiMGI0NzYtMDA3ZS00ZTJlLTgwNDktZDZlNGYzNDllYzBmIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
        source:
          'https://www.mavenanalytics.io/challenges/maven-northwind-challenge/24',
      },
    },
    {
      title: 'Airline Passengers Satisfaction',
      desc: 'Report based on passenger survey results prepared to recommend a data-driven strategy for an airline to increase their customer satisfaction ratings.',
      img: {
        src: new URL(
          '../img/projects/airlinepassengers-dashboard.png',
          import.meta.url,
        ),
        srcMobile: new URL(
          '../img/projects/airlinepassengers-dashboard-mobile.png',
          import.meta.url,
        ),
        alt: 'Airline Passengers Satisfaction Dashboard',
      },
      themePhoto: {
        src: new URL(
          '../img/projects/airlinepassengers-photo.jpg',
          import.meta.url,
        ),
        alt: 'Passenger with suitcase walking through the airport, standing passenger aircraft visible in background.',
      },
      links: {
        live: 'https://app.powerbi.com/view?r=eyJrIjoiNWI3ZDhlN2MtY2M3MS00YWMzLTg0NDYtNTcyMzQ4ZGZiMDUyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
        source:
          'https://www.mavenanalytics.io/challenges/maven-airlines-challenge/7',
      },
    },
    {
      title: 'Tour de France',
      desc: 'The infographic-style dashboard designed to educate new viewers, highlight the magnitude of the event, and build anticipation for Tour de France.',
      img: {
        src: new URL(
          '../img/projects/tourdefrance-dashboard.jpg',
          import.meta.url,
        ),
        srcMobile: new URL(
          '../img/projects/tourdefrance-dashboard-mobile.jpg',
          import.meta.url,
        ),
        alt: 'Tour de France Dashboard',
      },
      themePhoto: {
        src: new URL('../img/projects/tourdefrance-photo.jpg', import.meta.url),
        alt: 'Cyclists racing down the road',
      },
      links: {
        live: 'https://app.powerbi.com/view?r=eyJrIjoiMThkNWM5YTMtYWE5OS00NjQwLTkwYjEtOGQ1MzA5NzBiYmYzIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
        source:
          'https://www.mavenanalytics.io/challenges/maven-tour-de-france-challenge/25',
      },
    },
  ],
};
