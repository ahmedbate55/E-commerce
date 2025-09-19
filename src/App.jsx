import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LiquidEther from "./background/LiquidEther";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground (your pages) */}
      <div className="relative z-10 w-full h-full overflow-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
