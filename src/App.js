import "./App.css";
import AboutUs from "./client/pages/aboutUsPage";
import LandingPage from "./client/pages/landingPage";
import LibraryPage from "./client/pages/libraryPage";
import PaymentPage from "./client/pages/paymentPage";
import PromocodePage from "./client/pages/promocodePage";
import RegistrationPage from "./client/pages/registrationPage";
import WriteArticlePage from "./client/pages/writeArticlePage";

function App() {
  return (
    <div className="w-screen h-screen font-patrick ">
      {/*<RegistrationPage />*/}

      {/*<PaymentPage />*/}
      {/*<PromocodePage />*/}
      {/*<AboutUs />*/}
      {/*<LandingPage />*/}
      {/*<WriteArticlePage />*/}
      <LibraryPage />
    </div>
  );
}

export default App;
