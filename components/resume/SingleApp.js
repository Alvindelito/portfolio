export default function SingleApp({ title, header, description, list }) {
  return (
    <div className="my-2">
      <h4 className="text-lg">
        <strong>{title}</strong> | {header}
      </h4>
      <p className="font-extralight text-md">{description}</p>
      <ul>
        {list.map((section, idx) => (
          <li className="list-disc ml-5 text-justify font-light" key={idx}>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
}
