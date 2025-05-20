import RegisterForm from "../components/Register/RegisterForm";
import Footer from "../Sections/Footer";
import NavBar from "../Sections/NavBar";

const page = () => {
  return (
    <div className="">
      <NavBar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default page;
