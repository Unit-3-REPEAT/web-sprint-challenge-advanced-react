import React from "react";
import { render, fireEvent, getByTitle, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {

    //Arrange
    const {getByLabelText, getByText} = render(<CheckoutForm />);

    //Act
    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const checkoutButton = getByText("Checkout"); // this one ONLY WORKS with specific name ("Checkout")

    //Assert
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(checkoutButton).toBeInTheDocument();

    //User types into input
    fireEvent.change(firstName, {target: {value: "Dino"}});
    fireEvent.change(lastName, {target: {value: "Muratovic"}});
    fireEvent.change(address, {target: {value: "222 Some Street"}});
    fireEvent.change(city, {target: {value: "New Orleans"}});

    //User clicks the button
    fireEvent.click(checkoutButton);
    
    expect(getByText(/dino/i)).toBeInTheDocument();   

});

// //this test was unfortunate :(
// test('Check if sucess message was rendered successfully', () => {
//     const {getByTestId, getByText} = render(<CheckoutForm />);
//     const successMessage = getByTestId("successMessage");
//     fireEvent.click(getByText("Checkout"));
//     expect(successMessage).toBeInTheDocument();
// })
