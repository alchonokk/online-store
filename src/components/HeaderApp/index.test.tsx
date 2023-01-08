import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Test App Routing", () => {
  test("check link basket", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const basketLink = screen.getByTestId("basket-link");
    userEvent.click(basketLink);
    expect(screen.getByTestId("basket-page")).toBeInTheDocument();
  });
});
