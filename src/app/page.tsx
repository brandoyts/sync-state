"use client";

import Container from "@/components/container";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const caseState = useAppSelector((state) => state.case);
  const counterState = useAppSelector((state) => state.counter);

  return (
    <Container>
      <main className="flex gap-12">
        <section className="flex flex-col  border-2 border-indigo-500  p-4 w-full">
          <h1 className="mb-6 text-2xl">Case State</h1>
          <p>title: {caseState.title}</p>
          <p>description: {caseState.description}</p>
        </section>

        <section className="flex flex-col  border-2 border-indigo-500  p-4 w-full">
          <h1 className="mb-6 text-2xl">Counter State</h1>
          <p>count: {counterState.value}</p>
        </section>
      </main>
    </Container>
  );
}
