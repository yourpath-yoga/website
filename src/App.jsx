import { DarkThemeToggle, Navbar, Flowbite, Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { useAnalytics } from "./analytics/segment";

const customTheme = {
  button: {
    color: {
      primary: "bg-primary-500 hover:bg-primary-600 text-white",
    },
  },
};

function App() {
  useAnalytics();

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid={true} className="sticky top-0 z-50 w-full border-b border-primary-100 bg-primary-50">
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Your Path Yoga Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-primary-700">Your Path Yoga</span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link href="/setup" className="text-primary-700 hover:text-primary-800">Setup Guide</Navbar.Link>
          <Navbar.Link href="/practice" className="text-primary-700 hover:text-primary-800">Practice Here</Navbar.Link>
          <Navbar.Link href="https://yourpathyoga.setmore.com/services/8b0b6436-cd2a-40ad-bf91-5808f14c27a9" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 font-semibold">Book Now</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className="w-full flex-col items-center justify-center bg-light">
        <Outlet />
      </main>

      <Footer container className="bg-light">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src="/images/logo.png"
              alt="Your Path Yoga Logo"
              name="Your Path Yoga"
            />
            <Footer.LinkGroup>
              <Footer.Link href="/about">About Megan</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Your Path Yoga™" year={2024} />
        </div>
      </Footer>
    </Flowbite>
  );
}

export default App;
