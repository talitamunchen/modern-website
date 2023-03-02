import { fireEvent, render, screen } from "@testing-library/react"
import Footer from "../Footer"

describe("<Footer />", () => {
  test("should call sayHi function when clicked on Footer links", () => {
    global.alert = jest.fn();
    render(<Footer />)
    const linkElement = screen.getByTestId(/content/i)
    fireEvent.click(linkElement)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })

  test("should open social media link when clicked", () => {
    global.open = jest.fn();
    render(<Footer />)
    const imgElement = screen.getByRole("img", {name: 'social-media-1'})
    fireEvent.click(imgElement)
    expect(global.open).toHaveBeenCalledTimes(1)
  })
})
