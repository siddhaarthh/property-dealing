export default function Home() {
  return (
    <main>
      <section className="md:px-5 lg:px-[10rem] py-5 flex items-center justify-between">
        <div className="w-[600px]">
          <h2 className="text-[60px] leading-[79.98px] font-[700] font-playfair">
            Let&apos;s start search <br /> for your dream home
          </h2>
        </div>

        <div className="w-[457px] flex flex-col gap-6 font-jost">
          <p className="text-[20px]">
            Discover the joy of hassle-free living. Let us handle the details
            while you focus on making memories. Welcome home!
          </p>
          <button className="w-[262px] h-[56px] rounded-[10px] px-[20px] bg-primary-500">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
