// <img src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600/v1615176450/portfolio/hero-bg_gsh3to.jpg" />
export default function Hero() {
  return (
    <div className="bg-c-lightgray dark:bg-c-black">
      <div className="max-w-screen-lg flex justify-center lg:h-96 mx-auto">
        {/* Description */}
        <div className="flex w-6/12 mx-2 lg:w-4/12 self-center flex-col">
          <p className=" mx-auto text-md text-c-darkgray dark:text-c-gray">
            Hi, my name is
          </p>
          <h2 className="mx-auto font-extrabold font-mono text-lg lg:text-4xl uppercase tracking-wide text-c-teal dark:text-c-electricblue">
            Alvin Delito
          </h2>
          <p className="mx-auto text-center text-c-darkgray dark:text-c-gray lg:text-left">
            I'm a
          </p>
          <strong className="mx-auto text-c-teal dark:text-c-electricblue uppercase tracking-wider font-mono lg:text-2xl">
            Software Engineer
          </strong>
          <p className="mx-auto text-c-darkgray dark:text-c-gray">
            I build things for the web
          </p>
        </div>
        {/* image */}
        <div className="flex w-4/12">
          <img
            className="mx-auto"
            src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600,q_80/v1615179277/portfolio/IMG_0834_lxs9ry.jpg"
            alt="picture of alvin"
          />
        </div>
      </div>
    </div>
  );
}
