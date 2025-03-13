import { AlertTriangle, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorCustom = ({ error, reset }: ErrorProps) => {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <AlertTriangle className="mb-4 h-20 w-20 text-red-500" />
      <h1 className="mb-2 text-3xl font-semibold">
        죄송합니다. 요청하신 작업을 처리하는 중 문제가 발생했습니다.
      </h1>
      <p className="mb-6 text-gray-600"> Error : {error.message}</p>
      <div className="flex gap-3">
        <button
          onClick={handleRetry}
          className="rounded-lg bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600"
        >
          다시 시도
        </button>
        <button
          onClick={() => router.push("/")}
          className="flex items-center rounded-lg bg-gray-300 px-4 py-2 text-gray-800 shadow hover:bg-gray-400"
        >
          <Home className="mr-1 h-5 w-5" /> 홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default ErrorCustom;
