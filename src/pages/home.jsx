import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiDownloadCloud } from "react-icons/fi";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .parent {
    width: 100%;
    max-width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(to right, #1a0024, #320979, #240066);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(26, 0, 36, 0.3) 40px 50px 25px -40px,
      rgba(50, 9, 121, 0.2) 0px 25px 25px -5px;
    position: relative;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 80px 40px 0px 20px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #ffffff;
    font-weight: 900;
    font-size: clamp(16px, 5vw, 18px);
  }

  .content .text {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-size: clamp(12px, 4vw, 14px);
    margin-top: 15px;
  }

  .bottom {
    padding: 8px 10px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: #c5a3ff;
    font-weight: bolder;
    font-size: clamp(10px, 3vw, 11px);
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #c5a3ff;
    stroke-width: 3px;
    max-height: 12px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 8px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 25px;
    aspect-ratio: 1;
    padding: 4px;
    background: white;
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(50, 9, 121, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 12px;
    fill: #c5a3ff;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: #ffc107;
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.5s ease-in-out;
  }

  .circle1 {
    width: clamp(140px, 45vw, 160px);
    top: 8px;
    right: 8px;
    transform: translate3d(0, 0, 20px);
  }
  .circle2 {
    width: clamp(110px, 35vw, 130px);
    top: 10px;
    right: 10px;
    transform: translate3d(0, 0, 40px);
    transition-delay: 0.4s;
  }
  .circle3 {
    width: clamp(90px, 28vw, 100px);
    top: 17px;
    right: 17px;
    transform: translate3d(0, 0, 60px);
    transition-delay: 0.8s;
  }
  .circle4 {
    width: clamp(60px, 20vw, 70px);
    top: 23px;
    right: 23px;
    transform: translate3d(0, 0, 80px);
    transition-delay: 1.2s;
  }
  .circle5 {
    width: clamp(40px, 15vw, 45px);
    top: 30px;
    right: 30px;
    transform: translate3d(0, 0, 100px);
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .circle5 .svg {
    width: 18px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(26, 0, 36, 0.3) 30px 50px 25px -40px,
      rgba(50, 9, 121, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(50, 9, 121, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }
  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }
  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }
  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }

  @media (max-width: 768px) {
    .parent {
      max-width: 250px;
      height: 260px;
    }

    .content {
      padding: 60px 30px 0px 15px;
    }

    .bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .bottom .view-more {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .parent {
      max-width: 220px;
      height: 240px;
    }

    .content {
      padding: 50px 20px 0px 10px;
    }

    .circle1 {
      width: clamp(100px, 40vw, 120px);
    }
    .circle2 {
      width: clamp(80px, 32vw, 90px);
    }
    .circle3 {
      width: clamp(60px, 24vw, 70px);
    }
    .circle4 {
      width: clamp(40px, 16vw, 50px);
    }
    .circle5 {
      width: clamp(30px, 12vw, 35px);
    }
  }
`;

function Home() {
  const tools = [
    {
      imageURL: "../images/html.png",
      altText: "HTML",
      title: "HTML",
      type: "web",
    },
    {
      imageURL: "../images/css.webp",
      altText: "CSS",
      title: "CSS",
      type: "web",
    },
    {
      imageURL: "../images/js.png",
      altText: "JS",
      title: "JavaScript",
      type: "web",
    },
    {
      imageURL: "../images/react.png",
      altText: "ReactJS",
      title: "React JS",
      type: "web",
    },
    {
      imageURL: "../images/node.png",
      altText: "NodeJS",
      title: "Node JS",
      type: "web",
    },
    {
      imageURL: "../images/expressJS.png",
      altText: "ExpressJS",
      title: "Express JS",
      type: "web",
    },
    {
      imageURL: "../images/thumb.webp",
      altText: "Tailwind",
      title: "Tailwind CSS",
      type: "web",
    },
    {
      imageURL: "../images/bootstrap.png",
      altText: "Bootstrap",
      title: "Bootstrap",
      type: "web",
    },
    {
      imageURL: "../images/C.webp",
      altText: "C",
      title: "C Language",
      type: "others",
    },
    {
      imageURL: "../images/cpp.png",
      altText: "C++",
      title: "C++",
      type: "others",
    },
    {
      imageURL: "../images/java.png",
      altText: "JAVA",
      title: "JAVA",
      type: "others",
    },
    {
      imageURL: "../images/mongoDB.webp",
      altText: "MongoDB",
      title: "MongoDB",
      type: "web",
    },
    {
      imageURL: "../images/mysql.png",
      altText: "MySQL",
      title: "MySQL",
      type: "web",
    },
  ];

  const myAcadamics = [
    {
      logo: "../images/ucp.jpg",
      title: "BSSE",
      subtitle: "Bachelor of Science Software Engineering",
      institute: "University of Central Punjab",
      status: "Ongoing",
      date: "2023 -2027",
    },
    {
      logo: "../images/pgc.png",
      title: "ICS",
      subtitle: "Intermediate of Computer Science",
      institute: "Punjab College, (Main)",
      status: "Completed",
      date: "2021 -2023",
    },
    {
      logo: "../images/fgs.jpeg",
      title: "Matric",
      subtitle: "Matric (Computer Science)",
      institute: "Freedom Grammar School",
      status: "Completed",
      date: "2019 -2021",
    },
    {
      logo: "../images/ideo.png",
      title: "Course",
      subtitle: "Website Development",
      institute: "Ideoversity Training Institute",
      status: "Completed",
      date: "2024 -2025",
    },
    {
      logo: "../images/navttc.jpg",
      title: "Course",
      subtitle: "Website Development",
      institute: "National Vocational & Technical Training Commission",
      Status: "Completed",
      date: "2025",
    },
  ];

  const projects = [
    {
      image: "./images/auth.png",
      title: "Authentication System",
      discription:
        "A MERN Stack Project use to handle Login, Signup, Forget Password with OTP verification via Email ID & is protected with JWT Tokens. MVC architecture is used in this project.",
      hash1: "#react",
      hash2: "#tailwind",
      hash3: "#mongoDB",
      hash4: "#express",
      openLink: "https://github.com/armughan418/Authentication-System",
    },
    {
      image: "./images/eps.jpg",
      title: "School Management System",
      discription:
        "A School Management System for managing student records and generating challan forms, with features to track and update fee payments.",
      hash1: "#react",
      hash2: "#tailwind",
      hash3: "#mongoDB",
      hash4: "#express",
      openLink: "https://github.com/armughan418/EPS-MY_SMS",
    },
    {
      image: "./images/ecommerce.png",
      title: "Ecommerce System",
      discription:
        "An Ecommerce system for menaging restraunt. A full CRUD is implemented in it with an admin dashboard also",
      hash1: "#react",
      hash2: "#react-bootstrap",
      hash3: "#mongoDB",
      hash4: "#express",
      openLink: "http://github.com/",
    },
  ];

  const [selectedType, setSelectedType] = useState(null);
  const filteredTools = selectedType
    ? tools.filter((tool) => tool.type === selectedType)
    : tools;
  const texts = ["MERN-Stack Developer", "Programmer & Coder"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 100 : 150;
  const delayBetweenWords = 1500;
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_md1plme",
        "template_92f90ip",
        form.current,
        "LGjittm5Fhbm24vPF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message has been sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again");
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopIndex % texts.length];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, loopIndex, texts]);

  return (
    <>
      {/* Hero Section with Transition */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] text-white px-4"
        id="home"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto flex px-5 py-12 flex-col-reverse lg:flex-row items-center gap-8"
        >
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-500">Armughan</span>
              <br />
              <span className="border-r-2 border-white pr-1">
                {currentText}
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-base sm:text-lg max-w-md">
              I'm a Full-Stack Web Developer (MERN Stack). <br />
              Reach out if you'd like to learn more!
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => window.open("../files/CV.pdf", "_blank")}
                className="text-white bg-yellow-500 py-2 px-6 rounded-lg text-base hover:bg-yellow-600 flex gap-3 h-12 items-center"
              >
                <FiDownloadCloud size={24} />
                Download CV
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/armughan418/", "_blank")
                }
                className="text-white bg-gray-800 py-2 px-6 rounded-lg text-base hover:bg-gray-900 flex gap-2 h-12 items-center"
              >
                <FaGithub className="w-6 h-6 text-white transition duration-300" />
                View Github
              </button>
            </motion.div>
            <div className="mt-11">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start gap-7 ml-14">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/armughan-javed/",
                      "_blank"
                    )
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 512 512"
                    strokeWidth={0}
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Linkedin
                  </span>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/armughan418",
                      "_blank"
                    )
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#333] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#555]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .296c-6.63 0-12 5.372-12 12 0 5.304 3.438 9.801 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.764-1.605-2.665-.303-5.466-1.34-5.466-5.961 0-1.316.47-2.395 1.237-3.24-.135-.303-.54-1.524.105-3.177 0 0 1.005-.322 3.3 1.24a11.463 11.463 0 0 1 3-.405c1.02.005 2.04.137 3 .405 2.295-1.562 3.3-1.24 3.3-1.24.645 1.653.24 2.874.12 3.177.765.845 1.23 1.924 1.23 3.24 0 4.635-2.805 5.655-5.475 5.961.42.36.81 1.08.81 2.19 0 1.575-.015 2.85-.015 3.24 0 .315.18.69.795.57C20.565 22.092 24 17.596 24 12.296c0-6.628-5.37-12-12-12z" />
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    GitHub
                  </span>
                </button>

                <a
                  href="https://wa.me/+923418609973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-green-600 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-green-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 2.507.733 4.849 2 6.856l-1.3 4.738 4.866-1.278c1.936.97 4.095 1.484 6.434 1.484 6.63 0 12-5.373 12-12S18.63.297 12 .297zm5.675 15.117c-.24.68-1.404 1.3-1.926 1.367-.493.063-1.12.088-3.708-.788-3.12-1.055-5.14-4.48-5.29-4.695-.15-.215-1.26-1.68-1.26-3.2 0-1.515.793-2.26 1.073-2.58.28-.32.61-.4.81-.4.21 0 .42 0 .6.01.19.02.45-.07.71.53.26.6.89 2.09.97 2.24.08.15.14.33.03.53-.11.2-.17.32-.34.5-.17.18-.34.4-.49.53-.16.13-.33.28-.14.57.19.29.84 1.4 1.81 2.26 1.24 1.1 2.28 1.44 2.59 1.6.33.15.52.13.71-.07.19-.2.81-.94 1.03-1.27.22-.33.43-.27.72-.16.28.1 1.78.84 2.08.99.3.15.5.22.57.35.08.13.08.75-.15 1.43z" />
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    WhatsApp
                  </span>
                </a>
              </span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:mb-0"
          >
            <div className="cursor-pointer mt-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-yellow-500 rounded-full overflow-hidden shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="./images/my-photo2.png"
                alt="Armughan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        id="about"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] text-white p-4"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
          className="group flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl bg-neutral-50 rounded-xl bg-gradient-to-tr from-[#1a0024] via-[#320979] to-[#240066] text-gray-50 p-6 sm:p-10 shadow-xl"
        >
          {/* Profile Picture */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-yellow-500 shadow-lg overflow-hidden flex items-center justify-center mb-8 lg:mb-0"
          >
            <img
              src="./images/my-photo2.png"
              alt="Armughan"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* About Me Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center text-center lg:text-left space-y-6 p-4"
          >
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-yellow-500">
              About Me
            </h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-yellow-500 rounded"
            ></motion.div>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              I am Armughan, currently completed my 4th semester of a Bachelor
              of Science in Software Engineering (BSSE) at the University of
              Central Punjab (UCP), Lahore. Alongside my degree, I have
              completed a MERN-Stack Website Development course at Ideoversity
              Training Institute, located in Arfa Karim Software Technology
              Park, Lahore. Currently, I have also completed a web development
              course under the NAVTTC program.
            </p>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              Previously, I completed my Intermediate in Computer Science (ICS)
              at Punjab College of Information Technology, Lahore (Main Campus),
              and my Matriculation from Freedom Grammar School, Lahore.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Academics Section */}
      <div
        id="acadamics"
        className="min-h-screen bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] py-12 pt-28"
      >
        <div className="relative flex flex-col items-center text-white px-4">
          <h1 className="text-yellow-500 text-3xl sm:text-4xl font-bold tracking-wide">
            Academics
          </h1>
          <div className="h-1 w-20 bg-yellow-500 rounded-full mt-6 mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-14 justify-center pt-11 px-4">
          <StyledWrapper className="w-full max-w-7xl flex flex-wrap gap-8 justify-center">
            {myAcadamics.map((item, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp animation-delay-200 shadow parent cursor-pointer w-full sm:w-[20rem] md:w-[22rem]"
              >
                <div className="p-2 card w-full h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="logo relative flex items-center justify-start p-4">
                    <span className="circle circle1" />
                    <span className="circle circle2" />
                    <span className="circle circle3" />
                    <span className="circle circle4" />
                    <span className="circle circle5">
                      <img
                        src={item.logo}
                        alt={item.title ? `${item.title}-icon` : "icon"}
                        className="w-8 h-8 rounded-full ml-2"
                      />
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content text-white px-4 py-2 space-y-1">
                    <span className="title block text-lg font-semibold">
                      {item.title}
                    </span>
                    <span className="text block text-sm w-44">
                      {item.subtitle}
                    </span>
                    <span className="text block text-sm w-44">{item.date}</span>
                  </div>
                  <div className="bottom px-4 py-2">
                    <div className="social-buttons-container">
                      <h1 className="font-bold text-sm sm:text-base text-yellow-500">
                        {item.institute}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StyledWrapper>
        </div>
      </div>

      {/* Tools and Technologies */}
      <div
        id="tools"
        className="bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] min-h-screen px-4 py-12 pt-24"
      >
        <div className="text-center">
          <h1 className="text-yellow-500 text-3xl sm:text-4xl font-bold">
            Tools & Technologies
          </h1>
          <div className="h-1 w-28 bg-yellow-500 rounded-full mt-4 mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-8">
          <button
            className={`w-16 h-10 rounded-md text-sm border border-yellow-500 transition duration-200
        ${
          selectedType === null
            ? "bg-yellow-500 text-black"
            : "bg-transparent text-white hover:bg-yellow-500 hover:text-black"
        }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>

          <button
            className={`w-36 sm:w-48 h-10 rounded-md text-sm transition duration-200 border 
        ${
          selectedType === "web"
            ? "bg-yellow-500 text-black border-yellow-500"
            : "bg-transparent text-white border-yellow-500 hover:bg-yellow-500 hover:text-black"
        }`}
            onClick={() => setSelectedType("web")}
          >
            Web Technologies
          </button>

          <button
            className={`w-24 h-10 rounded-md text-sm transition duration-200 border 
        ${
          selectedType === "others"
            ? "bg-yellow-500 text-black border-yellow-500"
            : "bg-transparent text-white border-yellow-500 hover:bg-yellow-500 hover:text-black"
        }`}
            onClick={() => setSelectedType("others")}
          >
            Others
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-10">
          <div className="flex flex-wrap gap-4 justify-center items-center px-14">
            {filteredTools.map((tool, index) => (
              <label
                key={index}
                className="text-yellow-500 cursor-pointer animate-in fade-in-right duration-500 delay-100"
              >
                <input type="checkbox" className="hidden peer" />
                <div className="bg-white p-4 rounded shadow transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg group flex flex-col gap-4 w-28 sm:w-32 h-36 sm:h-40 bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-transparent hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-indigo-500/20 rounded-lg border-2 border-indigo-500/40 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/30 transition-all duration-300">
                      <div className="flex flex-col gap-1 p-2">
                        <img
                          src={tool.imageURL}
                          alt={tool.altText}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute top-0 right-4 sm:right-6 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-600 group-hover:bg-indigo-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-xs sm:text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300">
                      {tool.title}
                    </p>
                  </div>
                  <div className="h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300" />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="min-h-screen w-full bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] text-white flex flex-col items-center px-6 py-16"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-yellow-400 text-2xl sm:text-4xl font-bold tracking-wide">
            My Projects
          </h1>
          <div className="h-1 w-20 bg-yellow-400 rounded-full mt-4 mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 cursor-pointer">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-[#151030] hover:bg-gray-900 transition-all duration-300 rounded-3xl shadow-lg p-6 flex flex-col gap-5 transform hover:scale-105"
              style={{ transition: "transform 0.3s ease" }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-xl transition-transform duration-300"
              />

              {/* Text */}
              <div className="flex flex-col gap-3">
                <p className="text-yellow-400 text-xl font-bold">
                  {project.title}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base">
                  {project.discription}
                </p>
              </div>

              {/* Hash Tags */}
              <div className="flex flex-wrap gap-3 text-sm mt-2">
                <span className="text-green-400">{project.hash1}</span>
                <span className="text-yellow-400">{project.hash2}</span>
                <span className="text-pink-400">{project.hash3}</span>
                <span className="text-blue-400">{project.hash4}</span>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => window.open(project.openLink, "_blank")}
                  className="flex items-center justify-center gap-2 w-full max-w-xs py-3 bg-black rounded-lg text-white hover:bg-gray-800 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                  View on Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
        <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] text-white px-5">
          <div className="container mx-auto py-16">
            <div className="flex flex-col text-center w-full">
              <h1 className="text-4xl sm:text-3xl font-bold text-yellow-500 mb-4">
                Contact Me
              </h1>
              <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6 rounded"></div>
              <p className="lg:w-2/3 mx-auto text-base leading-relaxed text-white mb-6">
                If you have any questions or if you want to get in touch, feel
                free to reach out! I would love to hear from you.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4">
                  <label className="block mb-2 text-sm font-semibold text-yellow-400">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-white focus:text-black focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 text-white placeholder:text-gray-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex-1 mb-4">
                  <label className="block mb-2 text-sm font-semibold text-yellow-400">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-white focus:text-black focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 text-white placeholder:text-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold text-yellow-400">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  autoComplete="off"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-white focus:text-black focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 text-white placeholder:text-gray-300 resize-none"
                  placeholder="Enter your message here"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-md transition-all duration-300"
                >
                  {loading ? "Sending..." : "Semd Message"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
