import Loader from "../loader/Loader";

export default function Modal() {
  return (
    <div className="w-full z-30 h-dvh bg-black/80 flex justify-center items-center fixed top-0 left-0">
      <div>
        <Loader />
      </div>
    </div>
  );
}
