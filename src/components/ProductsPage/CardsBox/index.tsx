import Card, { ICardType } from "./Card";

import "./style.scss";

interface ICardBox {
  filteredData: ICardType[];
}

const CardsBox = ({ filteredData }: ICardBox) => {
  return (
    <section className="cards-box">
      {filteredData.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </section>
  );
};

export default CardsBox;
