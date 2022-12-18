import { data } from "./CartData";
import { CreateCard } from "./CreateCard";
import './style.css'

function CreateCardsBox() {
  return (
    <section className="cards-box">
      {data.map((card) => {
        return <CreateCard key={card.id} {...card}></CreateCard>;
      })}
    </section>
  );
}

export default CreateCardsBox;