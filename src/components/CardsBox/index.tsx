import { data } from "./CartData";
import { Card } from "./Card";
import "./style.scss";

function CardsBox() {
  return (
    <section className="cards-box">
      {data.map((card) => {
        return <Card key={card.id} {...card}></Card>;
      })}
    </section>
  );
}

export default CardsBox;
