import Head from 'next/head';
import Education from '../components/resume/Education';
import ResumeApplications from '../components/resume/ResumeApplications';
import TechnicalSkills from '../components/resume/TechnicalSkills';
import WorkExperience from '../components/resume/WorkExperience';

export default function ResumePage() {
  return (
    <div>
      <Head>
        <title>Alvin Delito | Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2 className="text-center text-4xl font-extralight py-4 bg-gray-100 text-c-darkgray dark:bg-c-darkgray dark:text-c-teal">
        Resume
      </h2>
      <div className="w-full bg-gray-100 dark:bg-c-darkgray">
        <div className="max-w-screen-lg mx-auto divide-y divide-gray-500 space-y-4 pb-8">
          <TechnicalSkills />
          <ResumeApplications />
          <WorkExperience />
          <Education />
        </div>
      </div>
    </div>
  );
}
