import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-hero">
        <h1 className="home-title">UI Component Library</h1>
        <p className="home-subtitle">
          A collection of customizable, accessible React components
        </p>
      </header>

      {/* <section className="home-section">
        <h2>Features</h2>
        <div className="home-features">
          <div className="home-feature-card">
            <h3>Customizable</h3>
            <p>
              Each component accepts props for different variants, sizes, and
              styles
            </p>
          </div>
          <div className="home-feature-card">
            <h3>Accessible</h3>
            <p>Built with semantic HTML and proper ARIA attributes</p>
          </div>
          <div className="home-feature-card">
            <h3>No Dependencies</h3>
            <p>Pure React components with vanilla CSS - no UI frameworks</p>
          </div>
          <div className="home-feature-card">
            <h3>Easy to Use</h3>
            <p>
              Copy components directly into your project and customize as needed
            </p>
          </div>
        </div>
      </section> */}

      <section className="home-section">
        <h2>Components</h2>
        <div className="home-components">
          <div className="home-component-item">Button</div>
          <div className="home-component-item">Input</div>
          <div className="home-component-item">Textarea</div>
          <div className="home-component-item">Nav</div>
          <div className="home-component-item">Card</div>
        </div>
      </section>

      <section className="home-section">
        <h2>Getting Started</h2>
        <div className="home-usage">
          <p>
            Select a component from the sidebar to view examples, props
            documentation, and usage guides.
          </p>
          {/* <p>
            Each component is self-contained with its own CSS file, making it
            easy to copy into your projects.
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
