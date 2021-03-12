import SingleApp from './SingleApp';

const timCamp = [
  `Generated 10 million unique records starting from a dataset of 100 to
  determine better use case between MongoDB & Postgres by comparing
  query latency through B-tree indexing`,
  `Horizontally scaled out from 1 service at 600/RPS to 4 services at
  2000/RPS while maintaining 20ms average latency and <1% error rate
  through load balancing by least connections in Nginx`,
  `Implemented reverse proxy caching to produce average latency of 11ms
  at 10,000/RPS with one service`,
];

const getsy = [
  `Built interactive page that dynamically renders hundreds of items & reviews`,
  `Connected 5 modules and databases into one single page through a service-oriented architecture`,
  `Deployed to AWS/EC2 by proxy to be accessed by any device with internet`,
];

const roomease = [
  `Led the backend development which included establishing ​API routes​ and developing ​schemas to coordinate with frontend development`,
  `Implemented the usage of ​React Hooks​ to ensure cohesiveness of different components by performing ​asynchronous​ operations with ​Axios`,
  `Researched new resources given a limited time frame to implement brand new tech such as Firebase & Expo​ to develop a fully functional application in a week`,
];

export default function ResumeApplications() {
  return (
    <div className="text-c-gray">
      <h3 className="text-c-teal uppercase text-center text-lg">
        Applications
      </h3>
      <SingleApp
        title="TimCamp"
        header="Software Engineer | Postgres, Nginx, New Relic, AWS/EC2, K6,
        Loader.io"
        description="Scalable RESTful API service built for an e-commerce platform and
        optimized to handle web-scale traffic"
        list={timCamp}
      />
      <SingleApp
        title="Getsy"
        header="Software Engineer | ​MySQL, Express, React, Node, AWS EC2"
        description="Single page application mock of popular e-commerce marketplace platform Etsy"
        list={getsy}
      />
      <SingleApp
        title="RoomEase"
        header="Software Engineer | ​React Native, Express, MongoDB, Mongoose, Expo, Firebase"
        description="Mobile application to track expenses, chores, & groceries between roommates"
        list={roomease}
      />
    </div>
  );
}
