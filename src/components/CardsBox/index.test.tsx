import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import CardsBox from ".";
import "@testing-library/jest-dom/extend-expect";

describe("CardsBox", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsBox />
        </BrowserRouter>
      </Provider>
    );
  });

  test("cardsBox", () => {
    const cardsElement = screen.getByTestId("cards-box");
    expect(cardsElement).toBeInTheDocument();
  });

  test("cardImage", () => {
    const cards = screen.getAllByTestId("cards-img");
    cards.map((card) => expect(card.querySelector("img")).toBeDefined());
  });
});
