import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyShellNext | Portfolio Shell New Version",
  description:
    "Portfolio Shell, un portfolio moderno uniendo la pasión, arte y tecnología",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased scrollbar-hide bg-black overflow-x-hidden"
        suppressHydrationWarning
      >
        <section className="relative min-h-screen w-full flex flex-col items-center bg-[image:var(--bg-image)] bg-cover bg-fixed bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60 pointer-events-none" />

          <header className="relative z-10 flex flex-col items-center justify-center w-full px-5 pt-10 pb-5">
            <div className="text-[#C8DDF5] bg-gradient-to-r from-[#4D417740] to-[#3A60A040] backdrop-blur-md border-t-2 border-[#C8DDF530] w-full max-w-5xl h-24 rounded-3xl flex items-center justify-between p-2 md:px-8">
              <div className="flex items-center gap-3 shrink-0">
                <Image
                  src="/img/MyShell.png"
                  alt="Logo"
                  width={65}
                  height={65}
                  className="rounded-[30%] border-b-4 border-[#C8DDF560] shadow-2xl md:size-35"
                  priority
                />

                <div>
                  <h2 className="text-2xl font-smooch text-amber-50 drop-shadow-2xl">
                    Mishelis Y. Martinez
                  </h2>
                  <h4 className="flex items-center font-itim text-amber-50/80 tracking-widest uppercase text-[0.8em]">
                    Developer and Illustrator
                    <span className="animate-ping ml-2 h-2 w-2 rounded-full bg-amber-50 opacity-80" />
                  </h4>
                </div>
              </div>

              <div className="flex hidden md:block flex-col items-end">
                <div className="text-2xl font-itim text-amber-50 flex items-center gap-2">
                  Level N°
                  <span className="rounded-full border-2 px-3 py-1 text-sm flex items-center justify-center border-[#C8DDF560] bg-[#0B183840]">
                    25%
                  </span>
                </div>
                <hr className="w-32 my-2 border-[#C8DDF560]/50" />
                <p className="text-amber-50/80 font-smooch text-2xl">
                  Studies in progress...
                </p>
              </div>
            </div>
          </header>

          <main className="relative z-10 w-full max-w-6xl flex-1 flex items-start justify-center p-5 lg:p-10">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
