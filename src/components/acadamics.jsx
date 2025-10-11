import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;

  .card {
    position: relative;
    width: 300px;
    height: 340px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    backdrop-filter: blur(12px);
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
      inset 0 0 20px rgba(255, 255, 255, 0.05);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 215, 0, 0.15),
      rgba(150, 0, 255, 0.15),
      transparent
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 35px rgba(141, 76, 255, 0.4),
      0 0 40px rgba(255, 215, 0, 0.3);
  }

  .card:hover::before {
    opacity: 1;
  }

  .logo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(145deg, #ffd700, #b47cff);
    margin: 2rem auto 1rem;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .card:hover .logo {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.7);
  }

  .logo img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    object-fit: cover;
  }

  .content {
    text-align: center;
    color: white;
    padding: 0 1.2rem;
  }

  .content h2 {
    font-size: 1.4rem;
    font-weight: 700;
    background: linear-gradient(to right, #ffd700, #b47cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .content p {
    color: rgba(255, 255, 255, 0.85);
    margin-top: 6px;
    font-size: 0.95rem;
    line-height: 1.4rem;
  }

  .bottom {
    margin-top: 1.5rem;
    padding: 0.9rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.07);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0 0 20px 20px;
  }

  .bottom h3 {
    font-weight: 600;
    color: #ffd700;
    font-size: 1rem;
  }

  .date {
    margin-top: 4px;
    font-size: 0.85rem;
    color: #cbbbe8;
  }
`;

const myAcademics = [
  {
    logo: "../images/ucp.jpg",
    title: "BSSE",
    subtitle: "Bachelor of Science in Software Engineering",
    institute: "University of Central Punjab",
    date: "2023 - 2027",
  },
  {
    logo: "../images/pgc.png",
    title: "ICS",
    subtitle: "Intermediate in Computer Science",
    institute: "Punjab College (Main Campus)",
    date: "2021 - 2023",
  },
  {
    logo: "../images/fgs.jpeg",
    title: "Matric",
    subtitle: "Matric (Computer Science)",
    institute: "Freedom Grammar School",
    date: "2019 - 2021",
  },
  {
    logo: "../images/ideo.png",
    title: "Course",
    subtitle: "MERN Stack Web Development",
    institute: "Ideoversity Training Institute",
    date: "2024 - 2025",
  },
  {
    logo: "../images/navttc.jpg",
    title: "Course",
    subtitle: "Web Development (NAVTTC Program)",
    institute: "NAVTTC Pakistan",
    date: "2025",
  },
];

function Acadamics() {
  return (
    <div
      id="acadamics"
      className="min-h-screen bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] py-20 pt-28"
    >
      {/* Heading */}
      <div className="relative flex flex-col items-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-4xl sm:text-5xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        >
          Academics
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-yellow-500 rounded-full mt-5 shadow-lg"
        ></motion.div>
      </div>

      {/* Cards */}
      <motion.div
        className="flex justify-center mt-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <StyledWrapper>
          {myAcademics.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="logo">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <p className="date">{item.date}</p>
              </div>
              <div className="bottom">
                <h3>{item.institute}</h3>
              </div>
            </motion.div>
          ))}
        </StyledWrapper>
      </motion.div>
    </div>
  );
}

export default Acadamics;
