export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/rolls-film-near-camera.jpg')" }}
    >
      <h1
        className="text-7xl lg:text-[10rem] font-semibold tracking-wide px-6 py-3"
        style={{
          color: "#c0392b",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        }}
      >
        camera kadai
      </h1>
    </main>
  );
}
