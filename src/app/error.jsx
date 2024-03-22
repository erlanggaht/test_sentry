"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import NextError from "next/error";

export default function GlobalError({ error,reset }) {

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <p className="text-red-500">
      {error.message}
      <NextError statusCode={error.message} />
    </p>
  );
}
