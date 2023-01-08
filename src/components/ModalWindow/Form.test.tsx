import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import BasketPage from "../../pages/BasketPage";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("RenderModalWindow with form", () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <BasketPage />
          </BrowserRouter>
        </Provider>
      );
    });
    const modalButton = screen.getByTestId("modal-window");
    userEvent.click(modalButton);
  });
  test("open modal window", () => {
    expect(screen.getByTestId("modal-form")).toBeInTheDocument();
  });

  describe("Input-name", () => {
    beforeEach(async () => {
      const inputElement = screen.getByTestId("nameAndSurname");
      userEvent.type(inputElement, "test");
      await act(() => {
        fireEvent.submit(screen.getByTestId("submit-form"));
      });
    });

    test("Event", () => {
      expect(screen.getByDisplayValue("test")).toBeInTheDocument();
    });

    test("ErrorLine name and surname", () => {
      expect(screen.getByTestId("input-name-error")).toBeInTheDocument();
      expect(screen.getByTestId("input-name-error")).toHaveTextContent(
        "Name and surname must be longer than 3 symbols"
      );
    });
  });

  describe("check phone", () => {
    beforeEach(async () => {
      const inputElement = screen.getByTestId("phone");
      userEvent.type(inputElement, "123456789");
      await act(() => {
        fireEvent.submit(screen.getByTestId("submit-form"));
      });
    });

    test("Event", () => {
      expect(screen.getByDisplayValue("123456789")).toBeInTheDocument();
    });

    test("ErrorLine phone", () => {
      expect(screen.getByTestId("input-phone-error")).toBeInTheDocument();
      expect(screen.getByTestId("input-phone-error")).toHaveTextContent(
        "Phone must be longer than 9 numbers"
      );
    });
  });
});
