import { useEffect } from "react";

export const MouseTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor-circle");
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");
    const fields = [...inputs, ...textareas];

    const handleMouseOver = () => {
      circles.forEach((circle) => {
        circle.classList.add("cursor-circle-thin");
      });
    };

    const handleMouseOut = () => {
      circles.forEach((circle) => {
        circle.classList.remove("cursor-circle-thin");
      });
    };

    fields.forEach((field) => {
      field.addEventListener("mouseover", handleMouseOver);
      field.addEventListener("mouseout", handleMouseOut);
    });

    // Initialize positions
    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      circles.forEach((circle) => {
        circle.classList.remove("cursor-circle-hidden");
      });

      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale =
          (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.35;
        y += (nextCircle.y - y) * 0.35;
      });

      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      fields.forEach((field) => {
        field.removeEventListener("mouseover", handleMouseOver);
        field.removeEventListener("mouseout", handleMouseOut);
      });

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
<div key={i} className="cursor-circle cursor-circle-hidden"></div>
      ))}
    </>
  );
};
