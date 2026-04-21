function HomePage(props) {
  return (
    <section className="home-page">
      <h1>Learn Log</h1>
      <p>
        A simple full-stack app for tracking learning topics and progress.
      </p>

      <button onClick={props.onGetStarted}>
        Get Started
      </button>
    </section>
  );
}

export default HomePage;