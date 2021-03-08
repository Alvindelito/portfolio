// <img src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600/v1615176450/portfolio/hero-bg_gsh3to.jpg" />
export default function Hero() {
  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-screen-lg mx-auto flex h-80 my-16">
        {/* Description */}
        <div className="w-6/12 justify-center self-center">
          <h3 className=" text-2xl pl-32 w-auto">it is me, Alvin</h3>
          <br />
          <p className="mx-auto pl-32 w-auto">Lorem ipsum dolor sit amet</p>
          <br />
          <p className="mx-auto pl-32 w-auto">meow meow</p>
        </div>
        {/* image */}
        <div className="w-6/12">
          <img
            className="mx-auto h-full"
            src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600,q_80/v1615179277/portfolio/IMG_0834_lxs9ry.jpg"
            alt="picture of alvin"
          />
        </div>
      </div>
    </div>
  );
}
