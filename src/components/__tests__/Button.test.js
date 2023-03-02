import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../Button"

describe("<Button />", () => {
  test("should call sayHi function when clicked", () => {
    global.alert = jest.fn();
    render(<Button />)
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })
})
