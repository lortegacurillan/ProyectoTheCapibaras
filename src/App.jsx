import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import "./css/App.css"
import { Body } from './Body';
import { LadoIzq } from './LadoIzq';

export function App() {
  return (
    <><Header />
    <LadoIzq />
    <Body />
    <Footer /></>
  );
}
