import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/hero";
import About from "../components/about";
import Acadamics from "../components/acadamics";
import Project from "../components/projects";
import Contact from "../components/contact";
import Tools from "../components/tools";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Acadamics />
      <Tools />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
