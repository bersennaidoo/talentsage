import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

function App() {
  return (
   <div>Hello I'm React</div>
  );
}

export default App;
