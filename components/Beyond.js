import Seam from "./Seam";

export default function Beyond({ beyondWork }) {
  if (!beyondWork?.title) return null;
  return (
    <section className="bg-pine text-chalk">
      <Seam flip />
      <div className="shell grid gap-8 pb-16 pt-6 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:pb-20">
        <h2 className="section-title">Off the keyboard</h2>
        <div>
          <h3 className="text-2xl">{beyondWork.title}</h3>
          <p className="mt-3 max-w-readable text-chalk/85">{beyondWork.body}</p>
        </div>
      </div>
    </section>
  );
}
