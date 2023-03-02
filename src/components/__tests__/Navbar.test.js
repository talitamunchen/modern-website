import { fireEvent, render, screen } from "@testing-library/react"
import NavBar from "../NavBar"

describe("<NavBar />", () => {
  test("should change icon when clicked on menu icon on mobile devices", () => {
    global.alert = jest.fn();
    render(<NavBar />)
    const imgElement = screen.getByAltText("menu-icon")
    expect(imgElement.src).toContain('menu.svg')
    fireEvent.click(imgElement)
    expect(imgElement.src).toContain('close.svg');
  })
})
