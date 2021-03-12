export default function About() {
  return (
    <div className="px-2 bg-gray-50 dark:bg-c-black">
      <div
        className="py-8 mx-auto max-w-screen-lg text-justify tracking-wide"
        id="about"
      >
        <h3 className="text-center text-3xl font-extralight text-c-teal dark:text-c-teal">
          About Me
        </h3>
        <p className="text-c-darkgray dark:text-c-gray p-1 md:w-8/12 mx-auto mb-2">
          &emsp; Hello there! I'm Alvin, an eager full-stack software engineer
          based in Los Angeles, California.
        </p>
        <p className="text-c-darkgray dark:text-c-gray p-1 md:w-8/12 mx-auto mb-2">
          My curiosity lets me explore technology that piques my interest, which
          is almost all types of tech! My biggest passion is software
          development because I love how everything fits together and I get to
          solve complex and interesting problems. Working alone can get lonely,
          so I really enjoy working with a team where different minds work
          together toward a shared vision.
        </p>
        <p className="text-c-darkgray dark:text-c-gray p-1 md:w-8/12 mx-auto mb-2">
          During my free time, I enjoy playing video games, re-watching shows
          that I loved as a kid that are now available on streaming platforms,
          and taking walks to different parks and enjoying the great outdoors!
        </p>
      </div>
    </div>
  );
}
