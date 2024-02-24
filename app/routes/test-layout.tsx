import DefaultLayout from "~/layout/default-auth";

export default function TestLayout() {
  return (
    <DefaultLayout>
      <section id="" className="col-span-full">Hello 2</section>
      <div className="col-span-full grid tablet:grid-cols-9">
        <section id="welcoming" className="col-span-10">Hello</section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </DefaultLayout>
  );
}
