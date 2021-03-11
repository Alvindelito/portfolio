import Card from './Card';

// TODO: optimize images by resizing and converting png to jpg. set from width to max-width

export default function Applications() {
  return (
    <div className="container py-8">
      <div className="max-w-screen-lg mx-auto justify-center">
        <h3
          id="applications"
          className="text-center font-extralight text-3xl tracking-wide"
        >
          Applications
        </h3>
        <div className="flex flex-wrap justify-center">
          <Card
            title="Getsy"
            imgLink="https://res.cloudinary.com/alvindelito/image/upload/v1615395747/portfolio/getsy-displayPicture_sceiu1.png"
            description="Mock website of the popular e-commerce platform Etsy. Utilizes Software-oriented architecture of independent modules"
            technologies="MySQL | Express | React | Node | AWS EC2"
            repoLink="https://github.com/hrla39copypasta/Etsy-SellerDescription"
          />
          <Card
            title="TimCamp System Design Capstone"
            imgLink="https://res.cloudinary.com/alvindelito/image/upload/v1615400896/portfolio/timcamp-demo_kgqndf.png"
            description="Scalable RESTful API service built for an existing e-commerce platform and optimized to handle web-scale traffic. This is done by increasing the dataset from 100 unique records to 10 million unique records."
            technologies="Postgres | Express | Node | AWS EC2 | Nginx"
            repoLink="https://github.com/SDCCopyTim/SDC-Description"
          />
          <Card
            title="roomease"
            imgLink="https://res.cloudinary.com/alvindelito/image/upload/c_scale,h_450,q_80/v1615402907/portfolio/home_b3giqa.jpg"
            description="roomease is a mobile application made with React Native to help strangers, friends, or existing roommates organize their household with ease!"
            technologies="MongoDB | Express | Node | React Native | Expo | Firebase Auth"
            repoLink="https://github.com/hrla39-roomease/roomease"
          />
        </div>
      </div>
    </div>
  );
}
