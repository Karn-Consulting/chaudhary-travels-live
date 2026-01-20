import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";

// Direct imports for core pages to prevent lazy loading issues
import Home from "./pages/Home";
import EmployeeTransport from "./pages/EmployeeTransport";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import GetQuote from "./pages/GetQuote";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CharDhamYatra from "./pages/CharDhamYatra";
import NotFound from "@/pages/NotFound";



function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/employee-transport" component={EmployeeTransport} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blogs/:id" component={BlogPost} />
        <Route path="/faq" component={FAQ} />
        <Route path="/get-quote" component={GetQuote} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/char-dham-yatra" component={CharDhamYatra} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
