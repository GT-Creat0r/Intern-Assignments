import { Nav, NavBrand, NavLink } from "../../components/Nav/Nav";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const NavPage = () => {
  return (
    <div>
      <h1>Nav</h1>
      <p>Navigation Bar component for site headers and menus.</p>
      <ComponentSection title="Basic Navigation">
        <ComponentDemo
          title="Simple Nav Bar"
          description="Basic navigation bar with links."
          component={
            <Nav>
              <NavBrand href="#">My App</NavBrand>
              <NavLink href="#" active>
                Home
              </NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Contact</NavLink>
            </Nav>
          }
          code={`
            <Nav>
              <NavBrand href="#">My App</NavBrand>
              <NavLink href="#" active>Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Contact</NavLink>
            </Nav>
            `}
        />
      </ComponentSection>

      <ComponentSection title="Usage">
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <pre>
            <code>{`
            import {Nav, NavBrand, NavLink} from './components/Nav.jsx';

            const MyNav = () => {
              return (
                <Nav>
                    <NavBrand href="#">My Website</NavBrand>
                    <NavLink href="#" active>Home</NavLink>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Services</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </Nav>
                );
            }`}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default NavPage;
