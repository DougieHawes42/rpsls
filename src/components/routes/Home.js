import "./style.scss";

// components
// utils
import { Route1 } from "../utils/routes";

const Home = () => {
  const content = <div className="home">content</div>;

  return <Route1 title="home" content={content} />;
};

export default Home;
