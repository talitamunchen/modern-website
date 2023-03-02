import { render, screen } from "@testing-library/react"
import App from "./App"

describe("<App />", () => {
  test("renders NavBar component", () => {
    render(<App />)
    const navElement = screen.getByTestId(/navbar/i)
    expect(navElement).toBeInTheDocument()
  })

  test("renders MainComponenet component", () => {
    render(<App />)
    const sectionElement = screen.getByTestId(/main-content/i)
    expect(sectionElement).toBeInTheDocument()
  })

  test("renders Stats component", () => {
    render(<App />)
    const sectionElement = screen.getByTestId(/stats/i)
    expect(sectionElement).toBeInTheDocument()
  })

  test("renders FeatureCard component", () => {
    render(<App />)
    const imgElement = screen.getAllByAltText("icon")
    expect(imgElement).toHaveLength(3)
  })

  test("renders BillingCard component", () => {
    render(<App />)
    const imgElement = screen.getAllByAltText("billing")
    expect(imgElement).toHaveLength(2)
  })

  test("renders Testimonials component", () => {
    render(<App />)
    const sectionElement = screen.getByTestId(/testimonials/i)
    expect(sectionElement).toBeInTheDocument()
  })

  test("renders ClientsList component", () => {
    render(<App />)
    const imgElement = screen.getAllByAltText("client-logo")
    expect(imgElement).toHaveLength(4)
  })

  test("renders CallToActionCard component", () => {
    render(<App />)
    const textElement = screen.getByText("Let’s try our service now!")
    expect(textElement).toBeInTheDocument()
  })

  test("renders Footer component", () => {
    render(<App />)
    const linkElement = screen.getAllByRole("heading", {level: 4})
    expect(linkElement).toHaveLength(12)
  })
})
