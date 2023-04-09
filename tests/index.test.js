import ExchangeForm from "../src/app/Components/ExchangeForm";
import Result from "../src/app/Components/Result";
import ExchangeCurrency from "../src/app/Components/ExchangeCurrency";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import exchangeSlice from "../src/redux/Exchange/exchangeSlice";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

describe("Exchange Currency", () => {

  const initialState = { output: 10 };
  const mockStore = configureStore({ reducer: exchangeSlice });
  let store = mockStore(initialState);

  it("Shouldn't render error alert component", () => {

    const { queryByRole } = render(
      <Provider store={store}>
        <ExchangeCurrency />
      </Provider>
    );

    expect(queryByRole("alert")).toBeNull();

  });

  it("Render result component", () => {

    render(<Result />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();

  });

  it("Check amount input value to be 1.0 initially", async() => {

    render(
      <Provider store={store}>
        <ExchangeForm />
      </Provider>
    );
  
    expect(screen.getByRole('textbox')).toHaveValue('1.0');
  
  });

  it("Renders two currency dropdowns", async() => {

    render(
      <Provider store={store}>
        <ExchangeForm />
      </Provider>
    );
  
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
  
  });

});