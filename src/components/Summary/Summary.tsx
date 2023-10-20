import data from "../../lib/data.json";
import Button from "./Button/Button";
import SummaryItem from "./SummaryItem";
import "./style.scss";
const Summary = () => {
  return (
    <section className="summarySection">
      <h3>Summary</h3>
      <div className="summarySection--list">
        {data.map((c, i) => (
          <SummaryItem key={i} {...c} />
        ))}
      </div>
      <Button />
    </section>
  );
};

export default Summary;
