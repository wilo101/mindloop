/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ConceptScopeBadge,
  Footer,
  Navbar,
  PageShell,
  ScrollToTop,
} from "./components";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Philosophy } from "./pages/Philosophy";
import { UseCases } from "./pages/UseCases";

const base = import.meta.env.BASE_URL;
const routerBasename = base === "/" ? undefined : base.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <PageShell>
        <ConceptScopeBadge />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/use-cases" element={<UseCases />} />
        </Routes>
        <Footer />
      </PageShell>
    </BrowserRouter>
  );
}
