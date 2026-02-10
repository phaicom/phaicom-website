import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

const filePath = "count.txt";

async function readCount() {
  const file = Bun.file(filePath);
  if (!(await file.exists())) {
    return 0;
  }
  return parseInt(await file.text(), 10);
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .inputValidator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await Bun.write(filePath, `${count + data}`);
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  const [num, setNum] = useState(1);

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-red-400">test</h1>
      <div>Count: {state}</div>
      <input
        type="number"
        value={num}
        className="max-w-50 border-2 px-2 py-1"
        onChange={(e) => {
          setNum(parseInt(e.target.value, 10));
        }}
      />
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="cursor-pointer rounded-xl border-2 px-2 py-1"
          onClick={() => {
            void updateCount({ data: num })
              .then(() => {
                void router.invalidate();
              })
              .catch(() => {});
          }}
        >
          Add {num} to {state}?
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-xl border-2 px-2 py-1"
          onClick={() => {
            void updateCount({ data: -num })
              .then(() => {
                void router.invalidate();
              })
              .catch(() => {});
          }}
        >
          Remove {num} to {state}?
        </button>
      </div>
    </section>
  );
}
