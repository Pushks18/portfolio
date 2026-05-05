export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 text-center md:px-8 md:py-20">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">About</h1>
        <div className="mt-8 grid gap-6 text-lg leading-8 text-copy">
          <p>
            My work sits at the intersection of AI systems, computer vision, and product
            engineering. I enjoy taking technically deep ideas and turning them into tools
            that are dependable in real-world environments.
          </p>
          <p>
            On the research side, I have worked on SLAM, visual odometry, semantic memory,
            and efficient inference. On the engineering side, I build full-stack systems,
            APIs, and ML-backed products with a strong emphasis on maintainability and
            performance.
          </p>
        </div>
      </section>
    </main>
  );
}
