import GithubSvg from '../public/github.svg';

export default function Card({
  title,
  imgLink,
  description,
  technologies,
  repoLink,
}) {
  return (
    <div className="bg-c-gray dark:bg-c-gray p-2 lg:w-5/12 m-2 border border-solid border-gray-400 border-opacity-50 rounded-xl shadow-md">
      <h4 className="text-center text-2xl font-light pb-2 tracking-wide">
        {title}
      </h4>
      <img className="mx-auto" src={imgLink} />
      <p className="text-base text-justify p-2">{description}</p>
      <a
        href={repoLink}
        className="flex justify-center underline items-end my-2"
      >
        <GithubSvg
          className="mx-1"
          viewBox="-50 0 1100 1100"
          width="30"
          height="30"
        />
        View Github Repo
      </a>
      <hr />
      <p className="text-center my-1">{technologies}</p>
    </div>
  );
}
