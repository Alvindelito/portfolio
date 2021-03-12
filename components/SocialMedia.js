import LinkedInSvg from '../public/linkedin-icon.svg';
import GithubSvg from '../public/github.svg';

export default function SocialMedia() {
  return (
    <div className="flex justify-center space-x-2">
      <a href="https://www.linkedin.com/in/alvindelito/" target="_blank">
        <LinkedInSvg viewBox="50 0 150 250" width="30" height="30" />
      </a>
      <a href="https://github.com/Alvindelito" target="_blank">
        <GithubSvg
          className="dark:bg-c-gray"
          viewBox="-60 -60 1150 1150"
          width="30"
          height="30"
        />
      </a>
    </div>
  );
}
