"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import DarkMode from "./components/DarkMode/DarkMode";

export default function Home() {
  
  return (
    <main className="">
      <DarkMode />
      <HomeComponent />      
    </main>
  );
}
