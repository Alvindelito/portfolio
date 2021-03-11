export default function Card({
  title,
  imgLink,
  description,
  technologies,
  repoLink,
}) {
  return (
    <div className="bg-gray-50 p-2 lg:w-5/12 m-2 border border-solid border-gray-400 border-opacity-50 rounded-xl shadow-md">
      <h4 className="text-center text-2xl font-light pb-2 tracking-wide">
        {title}
      </h4>
      <img className="mx-auto" src={imgLink} />
      <p className="text-base text-justify p-2">{description}</p>
      <a
        href={repoLink}
        className="flex justify-center underline items-end my-2"
      >
        <img
          className="mx-1"
          width="25px"
          height="25px"
          src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_64/v1615397726/portfolio/github_kwizjd.svg"
        />
        View Github Repo
      </a>
      <hr />
      <p className="text-center my-1">{technologies}</p>
    </div>
  );
}
