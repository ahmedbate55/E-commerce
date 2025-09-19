import { toast } from "react-hot-toast";
import { cart } from "../store/cart";
import { motion } from "framer-motion";
import noImage from "../assets/no.jpg";
const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Card({ product }) {
  const { addToCart } = cart();

  return (
    <motion.div
      variants={item}
      className="card bg-gray-900 text-white shadow-sm hover:scale-105 p-0 transition duration-300"
    >
      <figure>
        <img
          className="w-full object-cover md:h-[300px]"
          src={product.img ? product.img : noImage}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-sans">{product.name}</h2>
        <p className="font-sans">Price : {product.price} $</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              toast.success("Item added successfully");
              addToCart({ ...product, qty: 1 });
            }}
            className="btn btn-ghost"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
