// ~/error.tsx
"use client"; // ✅Error component 는 꼭 클라이언트 컴포넌트여야한다는 점 !!

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>{error.message}</button>
    </div>
  );
}
