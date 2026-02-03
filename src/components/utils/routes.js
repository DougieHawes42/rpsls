import "./style.scss";

export const Route1 = ({ title, content }) => (
  <div className="route route1">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);
