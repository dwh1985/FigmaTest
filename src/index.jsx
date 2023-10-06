import React from "react";
import ReactDOMClient from "react-dom/client";
import { AdjacentConstraint } from "./screens/AdjacentConstraint";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AdjacentConstraint />);
