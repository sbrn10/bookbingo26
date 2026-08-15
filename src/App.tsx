import BookGrid from "./components/BookGrid";
import CtxProvider from "./store/bingoContextProvider";

export default function App() {
  return (
    <>
      <CtxProvider>
        <BookGrid></BookGrid>
      </CtxProvider>
    </>
  );
}
