import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import Card from "../components/Card";
import SplitText from "../Texts/SplitText";
import Cart from "../components/Cart";
import { cart } from "../store/cart";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setModal] = useState(true);
  const { modal, openModal } = cart();
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  useEffect(() => {
    axios
      .get("https://free-food-menus-api-two.vercel.app/burgers")
      .then((res) => {
        setProducts(res.data);
        setTimeout(() => {
          setModal(false);
        }, 1000);
      });
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-10">
      {showModal ? <Modal /> : null}
      {modal && <Cart />}

      <div className="container p-4 hidden md:flex justify-between items-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button onClick={openModal} className="flex btn btn-success">
          Cart
        </button>
      </div>
      <div className="container p-4 flex fixed z-30 md:hidden justify-between items-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button onClick={openModal} className="flex btn btn-success">
          Cart
        </button>
      </div>

      <div className="w-full pt-24 md:pt-5 flex justify-center">
        <SplitText
          text="Welcome to our Restaurant "
          className="text-2xl md:text-3xl font-semibold text-black text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <section className="container px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 p-3 md:p-0 "
        >
          {products.map((el, index) => {
            return <Card key={index} product={el} />;
          })}
        </motion.div>
      </section>
    </div>
  );
}
