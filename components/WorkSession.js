export default function WorkSession() {
  return (
    <section className="shell max-w-5xl pb-20">
      <div className="grid gap-5 md:grid-cols-3">
        <article className="rule p-6">
          <p className="text-sm text-seam">01 / Understand</p>
          <h2 className="display mt-3 text-2xl">Start with the real goal</h2>
          <p className="mt-3 text-pine/70">
            I break a request into a clear outcome, the people using it, and the smallest useful
            first version.
          </p>
        </article>
        <article className="rule p-6">
          <p className="text-sm text-seam">02 / Build</p>
          <h2 className="display mt-3 text-2xl">Make the path simple</h2>
          <p className="mt-3 text-pine/70">
            I build responsive interfaces, connect them to practical APIs, and keep the code easy
            to understand and change.
          </p>
        </article>
        <article className="rule p-6">
          <p className="text-sm text-seam">03 / Improve</p>
          <h2 className="display mt-3 text-2xl">Check, learn, refine</h2>
          <p className="mt-3 text-pine/70">
            I test the important flows, listen to feedback, and make focused improvements instead
            of adding complexity for its own sake.
          </p>
        </article>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <h2 className="display text-3xl">What I am working on now</h2>
          <p className="mt-4 max-w-readable text-[1.1rem] text-pine/75">
            I am strengthening my JavaScript and Python foundations, practising database-backed
            applications, and looking for a team where I can contribute to useful web products
            while learning from experienced engineers.
          </p>
        </div>
        <aside className="bg-turf p-6 text-chalk">
          <p className="text-sm text-chalk/65">Simple rule</p>
          <p className="display mt-2 text-2xl">Clear beats clever.</p>
          <p className="mt-3 text-chalk/75">
            Good work should be useful first, polished second, and understandable throughout.
          </p>
        </aside>
      </div>
    </section>
  );
}
