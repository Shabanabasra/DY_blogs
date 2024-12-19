import AuthorCard from "@/components/AuthorCard";
import NavBar from "@/components/NavBar";
import React from "react";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
    <NavBar/>
    <Feature/>
    <Mega/>
    <AuthorCard/>
    <Footer/>
    
    </div>
  );
}