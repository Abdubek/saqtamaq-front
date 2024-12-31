"use client";

import { useRouter } from "next/navigation";

export const Arrow = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.29289 12.7072C7.90237 12.3167 7.90237 11.6835 8.29289 11.293L13.9497 5.63616C14.3403 5.24563 14.9734 5.24563 15.364 5.63616C15.7545 6.02668 15.7545 6.65984 15.364 7.05037L10.4142 12.0001L15.364 16.9499C15.7545 17.3404 15.7545 17.9736 15.364 18.3641C14.9734 18.7546 14.3403 18.7546 13.9497 18.3641L8.29289 12.7072Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
