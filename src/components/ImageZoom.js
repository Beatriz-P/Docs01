import React, { useState } from "react";

export default function ImageZoom({ src, alt, thumbWidth = 250 }) {
  const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);
 /*const toggle = () => {
   setIsOpen(!isOpen);
   document.body.style.overflow = isOpen ? "auto" : "hidden"; // bloquea scroll
 };*/
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={thumbWidth}
        style={{
          cursor: "pointer",
          //width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        onClick={toggle}
      />
      {isOpen && (
        <div
          onClick={toggle}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(51, 51, 51, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 0 10px #000",
            }}
          />
        </div>
      )}
    </>
  );
}
