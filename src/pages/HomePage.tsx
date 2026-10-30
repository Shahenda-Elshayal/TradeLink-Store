export function HomePage() {
  return (
    <section>
      <div className="grid lg:grid-cols-5 gap-4 bg-brand-surface-high text-brand-text">
        {/* left side */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <p className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-1 rounded-lg w-fit">
            <span className="inline-block size-2 rounded-full bg-primary" />
            TradeLink Online Store
          </p>

          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
          Everything you need, all in one place
          </h1>

          <p className="max-w-lg text-sm md:text-md leading-relaxed text-muted-foreground">
          Explore a wide collection of trusted products designed to make your daily life easier, better, and more convenient.
          </p>

        </div>
        {/* right side */}
        <article className="bg-blue-500 lg:col-span-2">Welcome</article>
      </div>
    </section>
  );
}
