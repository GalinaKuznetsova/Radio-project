import "./App.css";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { Broadcasts } from "./layout/section/broadcasts/broadcasts";
import { Contacts } from "./layout/section/contacts/contacts";
import { Guests } from "./layout/section/guests/guests";
import { Main } from "./layout/section/main/main";
import { Marketing } from "./layout/section/marketing/marketing";
import { Playlists } from "./layout/section/playlists/playlists";
import { Podcasts } from "./layout/section/podcastsCards/podcasts";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Podcasts />
      <Broadcasts />
      <Guests />
      <Playlists />
      <Marketing />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
