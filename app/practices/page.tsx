import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Practice from "./Practice";

import team from "@/app/_assets/abtHeader.jpg";

export default function PracticePage() {
  return (
    <>
      <Navbar />
      <Header title={"Practices"} photo={team} header={"Practices"} />
      <Practice />
      <Footer />
    </>
  );
}
