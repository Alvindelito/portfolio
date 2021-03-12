import Html5Svg from '../public/html5.svg';
import Css3Svg from '../public/css3.svg';
import JavascriptSvg from '../public/javascript.svg';
import ReactSvg from '../public/react.svg';
import NextSvg from '../public/nextjs.svg';
import NodeSvg from '../public/nodejs.svg';
import MySqlSvg from '../public/mysql.svg';
import PostgresSvg from '../public/postgresql.svg';
import MongoSvg from '../public/mongodb.svg';
import ExpressSvg from '../public/express.svg';

export default function Skills() {
  return (
    <div className="bg-gray-50 dark:bg-c-black py-8">
      <h3
        id="skills"
        className="text-c-teal text-center font-extralight text-3xl tracking-wide"
      >
        Skills
      </h3>
      <div className="max-w-screen-lg justify-center items-center flex flex-wrap lg:mx-auto">
        <h4 className="dark:text-c-gray font-bold tracking-wider self-center p-4 border-black w-full text-center text-2xl lg:w-4/12 lg:text-left lg:h-full lg:border-r lg:border-black">
          Frontend Development
        </h4>
        <Html5Svg
          className="m-1 lg:m-4 dark:bg-c-gray"
          viewBox="105 200 665 385"
          width="100"
          height="100"
        />
        <Css3Svg
          className="m-1 lg:m-4 dark:bg-c-gray"
          viewBox="0 -10 350 500"
          width="100"
          height="100"
        />
        <JavascriptSvg
          className="m-1 lg:m-4 dark:bg-c-gray"
          viewBox="-90 100 585 350"
          width="100"
          height="100"
        />
        <ReactSvg
          className="m-1 lg:m-4 "
          viewBox="160 115 525 360"
          width="100"
          height="100"
        />
        <NextSvg
          className="m-1 lg:m-4 dark:bg-gray-50"
          viewBox="-10 25 220 70"
          width="100"
          height="50"
        />
      </div>

      <div className="max-w-screen-lg lg:mx-auto justify-center items-center flex flex-wrap">
        <h4 className="dark:text-c-gray font-bold tracking-wider self-center p-4 border-black w-full text-center text-2xl lg:w-4/12 lg:text-left lg:h-full lg:border-r lg:border-black">
          Backend Development
        </h4>
        <NodeSvg
          className="m-1 lg:m-4 dark:bg-gray-50"
          viewBox="-20 60 470 100"
          width="100"
          height="75"
        />
        <MySqlSvg
          className="m-1 lg:m-4 dark:bg-gray-50"
          viewBox="0 50 200 100"
          width="100"
          height="75"
        />
        <PostgresSvg
          className="m-1 lg:m-4 "
          viewBox="-20 50 465 335"
          width="100"
          height="100"
        />
        <MongoSvg
          className="m-1 lg:m-4 dark:bg-gray-50"
          viewBox="-15 30 535 100"
          width="100"
          height="40"
        />
        <ExpressSvg
          className="m-1 lg:m-4 dark:bg-gray-50"
          viewBox="-15 30 535 100"
          width="100"
          height="40"
        />
      </div>
    </div>
  );
}
