import "./style.scss";
const Result = () => {
  return (
    <section className="result">
      <div className="result--heading">Your Result</div>
      <div className="result--score">
        <span>76</span>
        <span>of 100</span>
      </div>
      <div className="result--description">
        <span>Great</span>
        <p>You scored higher than 65% of the people have taken these tests</p>
      </div>
    </section>
  );
};

export default Result;
