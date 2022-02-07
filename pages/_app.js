import "../styles/globals.css";
import { BudgetsProvider } from "../contexts/BudgetsContext";

function MyApp({ Component, pageProps }) {
  return (
    <BudgetsProvider>
      <Component {...pageProps} />
    </BudgetsProvider>
  );
}

export default MyApp;
