import Education from '../components/resume/Education';
import ResumeApplications from '../components/resume/ResumeApplications';
import TechnicalSkills from '../components/resume/TechnicalSkills';
import WorkExperience from '../components/resume/WorkExperience';

export default function ResumePage() {
  return (
    <div>
      <h2 className="text-center text-3xl font-extralight py-4 text-c-electricblue">
        Resume
      </h2>
      <div className="w-full bg-c-darkgray">
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
