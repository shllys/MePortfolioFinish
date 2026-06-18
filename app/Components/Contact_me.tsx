"use client";

import { useState } from "react";
import Image from "next/image";

type ActionType = "copy" | "link" | "download" | "mail";

interface ContactProps {
  name: string;
  link: string;
  action?: ActionType;
  href?: string;
  email?: string;
}

function Contact_me(props: ContactProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 600);
    try {
      if (props.action === "copy" && props.email) {
        const text = props.email;
        // Intento moderno (Clipboard API)
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(text);
            window.alert("✓ Email copiado: " + text);
            return;
          } catch (err) {
            // si falla, caerá al fallback
            console.warn("Clipboard API falló, usando fallback:", err);
          }
        }

        // Fallback compatible con navegadores móviles y antiguos
        const copyFallback = (value: string) => {
          const textarea = document.createElement("textarea");
          textarea.value = value;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "absolute";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          textarea.setSelectionRange(0, 999999);
          try {
            const successful = document.execCommand("copy");
            if (successful) {
              window.alert("✓ Email copiado: " + value);
            } else {
              window.alert(
                "No se pudo copiar automáticamente. Mantén presionado y pega el correo: " +
                  value,
              );
            }
          } catch (e) {
            window.alert(
              "No se pudo copiar automáticamente. Mantén presionado y pega el correo: " +
                value,
            );
          }
          document.body.removeChild(textarea);
        };

        copyFallback(text);
      } else if (props.action === "mail" && props.href) {
        // Abrir cliente de correo
        window.location.href = props.href;
      } else if (props.action === "link" && props.href) {
        // Abrir enlace en nueva pestaña
        window.open(props.href, "_blank");
      } else if (props.action === "download" && props.href) {
        // Descargar archivo
        const link = document.createElement("a");
        link.href = props.href;
        link.download = props.href.split("/").pop() || "archivo";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void handleClick();
        }
      }}
      className={`flex items-center border m-2 p-1 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-600/10 transition-all ${
        clicked ? "contact-clicked" : "border-blue-600"
      }`}
      onClick={handleClick}
    >
      <Image
        src={`/img/${props.name}.png`}
        alt=""
        width={40}
        height={40}
        className="object-cover mx-1 size-7"
        priority
        unoptimized
      />
      <p className="mx-3 text-sm">{props.link}</p>
    </div>
  );
}

export default Contact_me;
