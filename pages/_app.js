import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
import Header from "@/components/Header";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
            <>
                <Header />
                <main class="row">
                <LeftAside />
                    <Component {...pageProps} />
                <RightAside />
                </main>
                <Footer />
            </>
        );
            
}
