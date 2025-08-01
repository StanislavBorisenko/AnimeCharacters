import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { PrivyProvider } from "@privy-io/react-auth";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrivyProvider appId="cmdss6uvq00j0l50bvawii1g8">
			<App />
		</PrivyProvider>
	</StrictMode>,
);
