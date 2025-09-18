import { cart } from "../store/cart";
import { LuTrash } from "react-icons/lu";

export default function Cart() {
  const { CloseModal, cartInfo, incraseNum, decreasQty, removeFromCart } =
    cart();
  const total = cartInfo.reduce((prev, curr) => {
    return (prev += curr.price * curr.qty);
  }, 0);
  return (
    <div
      onClick={CloseModal}
      className="w-full h-dvh bg-black/80 z-50 fixed top-0 left-0 flex justify-end "
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="bg-gray-900 overflow-auto text-white w-[250px] md:w-[370px] flex flex-col p-4 gap-5"
      >
        <div className="flex items-center justify-between border-b pb-2">
          <h1 className="md:text-2xl">Cart</h1>
          <h1 className="md:text-2xl">total: {total.toFixed(2)}</h1>
        </div>
        <div className="grow">
          {cartInfo.map((el, index) => {
            return (
              <>
                <div className="flex flex-col gap-5">
                  <img
                    key={index}
                    className="w-full object-cover p-3 h-[250px] rounded-2xl"
                    src={el.image}
                  />
                  <p className="px-5 font-sans">
                    price : {(el.price * el.qty).toFixed(2)} $
                  </p>
                  <div className="flex justify-between items-center px-5">
                    <div className="flex items-center gap-3">
                      <button
                        className="btn btn-error btn-soft"
                        onClick={() => {
                          decreasQty(index);
                        }}
                      >
                        -
                      </button>
                      <p>{el.qty}</p>
                      <button
                        className="btn btn-success btn-soft"
                        onClick={() => {
                          incraseNum(index);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        removeFromCart(index);
                      }}
                      className="btn btn-error"
                    >
                      <LuTrash />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div
          className="border-t pt-2"
          onClick={() => {
            CloseModal();
          }}
        >
          <button className="btn btn-error w-full">Close</button>
        </div>
      </div>
    </div>
  );
}
