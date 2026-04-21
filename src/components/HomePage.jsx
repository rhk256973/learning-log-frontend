function HomePage(props) {
  return (
    <section className="home-page">
      <h1>Welcome to Learn Log</h1>
      <p>
        Stay organized and track your learning progress over time. Keep a record of the topics you've mastered and the goals you're working toward.
      </p>

      <button onClick={props.onGetStarted}>
        Get Started
      </button>
    </section>
  );
}

export default HomePage;