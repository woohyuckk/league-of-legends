"use client";

import { ErrorProps } from "@/components/ErrorCustom";
import { AlertTriangle } from "lucide-react";
import "./globals.css";

const GlobalError = ({ error, reset = () => {} }: ErrorProps) => {
  const handleRetry = () => {
    reset();
  };
  return (
    <html>
      <body>
        <div
          className="flex min-h-screen flex-col items-center justify-center bg-gray-50"
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <AlertTriangle
            style={{
              fontWeight: "bold",
              marginBottom: "16px",
              height: "20px",
              width: "20px",
              color: "red",
            }}
            className="mb-4 h-20 w-20 text-red-500"
          />
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
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
