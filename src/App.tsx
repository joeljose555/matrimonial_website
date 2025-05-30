import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load components for better performance
const Dashboard = lazy(() => import("./components/Dashboard"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const RegistrationPage = lazy(() => import("./components/RegistrationPage"));
const ProfileCreation = lazy(() => import("./components/ProfileCreation"));
const ProfilePage = lazy(() => import("./components/ProfilePage"));
const ChatMessagesPage = lazy(() => import("./components/ChatMessagesPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<ChatMessagesPage />} />

          {/* Add routes for other pages */}
          <Route
            path="/about"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">About Us</h1>
              </div>
            }
          />
          <Route
            path="/resources"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Resources</h1>
              </div>
            }
          />
          <Route
            path="/packages"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Packages</h1>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Contact Us</h1>
              </div>
            }
          />
          <Route
            path="/success-stories"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Success Stories</h1>
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">FAQ</h1>
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Terms & Conditions</h1>
              </div>
            }
          />
          <Route
            path="/privacy"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Privacy Policy</h1>
              </div>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
