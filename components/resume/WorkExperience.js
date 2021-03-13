// NOTE: Modularize this after I get my 2nd position

const ajWholesale = [
  `Provided various low-level IT support. Saving $5K+ for ERP and IT`,
  `Worked with ERP support by providing detailed bug reports and testing ERP software`,
  `Collaborated with VP to increase e-commerce presence by selling existing products on eBay`,
];

export default function WorkExperience() {
  return (
    <div className="m-2 py-4 text-c-darkgray dark:text-c-gray">
      <h3 className="text-c-teal uppercase text-center text-lg">
        Work Experience
      </h3>
      <div className="flex items-center place-content-between">
        <h4 className="text-lg">
          <span className="text-c-teal">AJ Wholesale Distributors, Inc.</span> |
          E-Commerce Clerk
        </h4>
        <p>2019 - 2020</p>
      </div>
      <ul>
        {ajWholesale.map((section, idx) => (
          <li className="list-disc ml-5 text-justify font-light" key={idx}>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
}
