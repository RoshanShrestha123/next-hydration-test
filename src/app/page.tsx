import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="text-center m-3 flex flex-col gap-4">
        <h1 className="text-2xl">Nothing fancy here</h1>
        <span>Pre-Render from the server (pure SSR)</span>
        <div>
          <Link
            className="bg-red-500 text-white p-2 rounded-sm "
            href={"/hydration"}
          >
            Go to Hydration page
          </Link>
        </div>
      </section>
    </main>
  );
}
