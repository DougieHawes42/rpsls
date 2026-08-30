import "./style.scss";

const GuideScreen = ({ onClick }) => {
  return (
    <div className="screen guide">
      <div className="guide-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        sem vel justo tincidunt tincidunt. Curabitur malesuada, sapien vitae
        consequat interdum, justo neque vulputate libero, sed facilisis massa
        arcu at erat. Donec suscipit, neque sed tincidunt consectetur, justo
        magna posuere lectus, vitae faucibus sapien lorem non purus. Suspendisse
        potenti. Praesent feugiat, nisl sed tincidunt interdum, lorem massa
        consequat lectus, vitae dignissim sapien arcu sed nulla. Morbi
        consectetur, ipsum at tincidunt facilisis, magna erat vulputate justo,
        vel suscipit lacus lorem nec mauris. Aliquam erat volutpat. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Donec vitae ligula nec magna malesuada elementum. Phasellus
        euismod, massa vitae faucibus tincidunt, neque justo consequat libero,
        at interdum purus magna vel mi. Aenean commodo, erat sed malesuada
        tincidunt, augue justo consectetur lorem, quis posuere nulla sapien non
        nisl. Nam vitae lorem id justo suscipit fermentum. Cras tincidunt,
        turpis vel malesuada cursus, arcu justo consequat neque, vitae posuere
        sapien erat eget nunc. Etiam interdum libero sed augue vulputate, vel
        faucibus justo interdum.
      </div>
      <button className="guide-return-button" onClick={onClick}>
        RETURN TO HOME SCREEN
      </button>
    </div>
  );
};

export default GuideScreen;
