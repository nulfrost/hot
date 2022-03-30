import Footer from "./components/Footer";
import PrimaryNav from "./components/PrimaryNav";
import PostsWrap from "./components/PostsWrap";
import { AddRepo } from "./components/AddRepo";

const App = (): JSX.Element => {
  return (
    <>
      <div className="App min-h-screen">
        <PrimaryNav />
        <PostsWrap />
        <Footer />
        <AddRepo />
      </div>
    </>
  );
};

export default App;
