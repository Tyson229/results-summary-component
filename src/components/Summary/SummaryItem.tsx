import './style.scss'

interface SummaryItemProps {
  category: string;
  score: number;
  icon: string;
}

const SummaryItem = (props: SummaryItemProps) => {
  return (
    <div className="summaryItem">
      <img src={props.icon} alt={props.category} />
      <div>{props.category}</div>
      <div>{props.score} <span>/ 100</span></div>
    </div>
  );
};

export default SummaryItem;
