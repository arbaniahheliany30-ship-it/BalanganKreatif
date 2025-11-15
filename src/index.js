import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/balangan-kreatif.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages yang dipakai
import Balangan from "views/Balangan.js";
import ProductPage from "views/examples/ProductPage.js";
import ProductMinumanPage from "views/examples/ProductMinumanPage.js";
import ProductPageJasa from "views/examples/ProductPageJasa.js";
import DetailMakanan1 from "views/detail_all/DetailMakanan1.js";
import DetailMakanan2 from "views/detail_all/DetailMakanan2.js";
import DetailMakanan3 from "views/detail_all/DetailMakanan3.js";
import DetailMakanan4 from "views/detail_all/DetailMakanan4.js";
import DetailMakanan5 from "views/detail_all/DetailMakanan5.js";
import DetailMakanan6 from "views/detail_all/DetailMakanan6.js";
import DetailMakanan7 from "views/detail_all/DetailMakanan7.js";
import DetailMinuman1 from "views/detail_all/DetailMinuman1.js";
import DetailMinuman2 from "views/detail_all/DetailMinuman2.js";
import DetailMinuman3 from "views/detail_all/DetailMinuman3.js";
import DetailMinuman4 from "views/detail_all/DetailMinuman4.js";
import DetailJasa1 from "views/detail_all/DetailJasa1.js";
import DetailJasa2 from "views/detail_all/DetailJasa2.js";
import DetailJasa3 from "views/detail_all/DetailJasa3.js";
import DetailJasa4 from "views/detail_all/DetailJasa4.js";
import DetailJasa5 from "views/detail_all/DetailJasa5.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/balangan" element={<Balangan />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/product-minuman" element={<ProductMinumanPage />} />
      <Route path="/product-jasa" element={<ProductPageJasa />} />
      <Route path="/detailmakanan1" element={<DetailMakanan1 />} />
      <Route path="/detailmakanan2" element={<DetailMakanan2 />} />
      <Route path="/detailmakanan3" element={<DetailMakanan3 />} />
      <Route path="/detailmakanan4" element={<DetailMakanan4 />} />
      <Route path="/detailmakanan5" element={<DetailMakanan5 />} />
      <Route path="/detailmakanan6" element={<DetailMakanan6 />} />
      <Route path="/detailmakanan7" element={<DetailMakanan7 />} />
      <Route path="/detailminuman1" element={<DetailMinuman1 />} />
      <Route path="/detailminuman2" element={<DetailMinuman2 />} />
      <Route path="/detailminuman3" element={<DetailMinuman3 />} />
      <Route path="/detailminuman4" element={<DetailMinuman4 />} />
      <Route path="/detailjasa1" element={<DetailJasa1 />} />
      <Route path="/detailjasa2" element={<DetailJasa2 />} />
      <Route path="/detailjasa3" element={<DetailJasa3 />} />
      <Route path="/detailjasa4" element={<DetailJasa4 />} />
      <Route path="/detailjasa5" element={<DetailJasa5 />} />

      <Route path="*" element={<Navigate to="/balangan" replace />} />
    </Routes>
  </BrowserRouter>
);
