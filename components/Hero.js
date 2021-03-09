// <img src="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_600/v1615176450/portfolio/hero-bg_gsh3to.jpg" />
export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-lg flex h-80 my-8 mx-auto">
        {/* Description */}
        <div className="flex w-6/12 self-center flex-col">
          <h3 className=" mx-auto text-4xl w-5/12">it is me, Alvin</h3>
          <p className="w-8/12 mx-auto">
            Lorem ipsum dolor sit amet akdjf aljdfla djkfjalds jlkdajflk jflkd
            jlkadsldfljf lksda fajsdl
          </p>
        </div>
        {/* image */}
        <div className="flex w-3/12">
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
