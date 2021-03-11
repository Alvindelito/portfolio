// <img src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600/v1615176450/portfolio/hero-bg_gsh3to.jpg" />
export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-lg flex h-96 mx-auto">
        {/* Description */}
        <div className="flex w-6/12 self-center flex-col">
          <p className=" mx-auto text-md">Hi, my name is</p>
          <h2 className="mx-auto font-extrabold font-mono text-3xl uppercase tracking-wide">
            Alvin Delito
          </h2>
          <p className="mx-auto">
            I'm a <strong>Software Engineer</strong>
          </p>
          <p className="mx-auto">I build things for the web</p>
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
