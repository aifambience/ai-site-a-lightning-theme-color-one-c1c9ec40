"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <section className="flex items-center justify-center w-full min-h-screen bg-[#3B82F6]">
        <h1
          className="text-[#06B6D4] font-black tracking-widest select-none"
          style={{
            fontSize: "clamp(3rem, 15vw, 14rem)",
            textShadow:
              "0 0 40px #06B6D4, 0 0 80px #3B82F6, 0 2px 0 #1e40af",
            letterSpacing: "0.15em",
          }}
        >
          KACHOWW
        </h1>
      </section>
    </main>
  );
}
