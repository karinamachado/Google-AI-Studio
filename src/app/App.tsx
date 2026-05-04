import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#1A1A1A", border: "1px solid #303030", color: "#F2F2F2" },
        }}
      />
    </>
  );
}