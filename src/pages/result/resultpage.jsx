import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { themesArr } from "../main/themesArr";

export const Result = ({ player }) => {
  const navigate = useNavigate();
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // تاريخ أول مقابلة: 12 يونيو 2026 الساعة 12:00 بليل
    const startDate = new Date("2026-06-12T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeElapsed({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", direction: "rtl", background: "#ffe4e1", minHeight: "100vh" }}>
      <h2 style={{ color: "#d147a3" }}>❤️ حكايتنا بدأت من ❤️</h2>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", margin: "30px 0", fontSize: "20px", fontWeight: "bold" }}>
        <div><span style={{ fontSize: "30px", color: "#ff4d4d" }}>{timeElapsed.days}</span> يوم</div>
        <div><span style={{ fontSize: "30px", color: "#ff4d4d" }}>{timeElapsed.hours}</span> ساعة</div>
        <div><span style={{ fontSize: "30px", color: "#ff4d4d" }}>{timeElapsed.minutes}</span> دقيقة</div>
        <div><span style={{ fontSize: "30px", color: "#ff4d4d" }}>{timeElapsed.seconds}</span> ثانية</div>
      </div>

      <div style={{ margin: "20px auto", maxWidth: "500px" }}>
        <p style={{ fontSize: "18px", color: "#555" }}>وكل ثانية بتعدي وإنتِ معايا بتبقى أجمل 🤍</p>
      </div>
    </div>
  );
};
