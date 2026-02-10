import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

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

  return (
    <>
      <h1 className="text-red-400">test</h1>
      <button
        type="button"
        onClick={() => {
          void updateCount({ data: 1 })
            .then(() => {
              void router.invalidate();
            })
            .catch(() => {});
        }}
      >
        Add 1 to {state}?
      </button>
    </>
  );
}
