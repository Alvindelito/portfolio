export default function Education() {
  return (
    <div className="m-2 py-4 text-c-darkgray dark:text-c-gray">
      <h3 className="text-c-teal uppercase text-center text-lg">Education</h3>
      <div>
        <div className="flex items-center place-content-between">
          <h4 className="text-lg text-c-teal">Hack Reactor</h4>
          <p>2020</p>
        </div>
        <p className="font-extralight text-md">
          Advanced Software Engineering Immersive
        </p>
      </div>
      <div>
        <div className="flex items-center place-content-between">
          <h4 className="text-lg text-c-teal">
            California State University Long Beach
          </h4>
          <p>2013-2018</p>
        </div>
        <p className="font-extralight text-md">
          B.S. Management Information Systems
        </p>
      </div>
    </div>
  );
}
