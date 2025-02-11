import Background from "./Background";
import HomeSection from "./HomeSection";
import MemberSection from "./MemberSection";
import Footer from "./Footer";

import AdjustCSSVariables from "./AdjustCSSVariables";

function App() {
  return (
    <div className="app">
      <AdjustCSSVariables />
      <Background />
      <div className="home">
        <HomeSection />
        <MemberSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
