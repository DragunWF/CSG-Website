import Background from "./Background";
import HomeSection from "./HomeSection";
import MemberSection from "./MemberSection";
import Footer from "./Footer";

import { AdjustCSSVariables } from "../helpers/utils";

function App() {
  AdjustCSSVariables();

  return (
    <div class="app">
      <Background />
      <div class="home">
        <HomeSection />
        <MemberSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
