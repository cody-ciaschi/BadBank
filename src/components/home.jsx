import Card from "./card";
import bankPic from "../assets/bankPicture.jpg" 

export default function Home() {
  return (
    <Card
      txtcolor="black"
      header="Bank of Cody Homepage"
      title="Welcome to the Bank of Cody"
      text="Welcome to the Bank of Cody website. Move around the website using the navigation bar above."
      body={<img src={bankPic} className="img-fluid" alt="Responsive image" />}
    />
  );
}
