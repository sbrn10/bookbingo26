import BookGrid from "./components/BookGrid";
import CtxProvider from "./store/bingoContextProvider";
import MirrorToLocalStorage from "./store/MirrorToLocalStorage";

export default function App() {
  return (
    <>
      <CtxProvider>
        <BookGrid></BookGrid>
        <MirrorToLocalStorage />
      </CtxProvider>
    </>
  );
}
