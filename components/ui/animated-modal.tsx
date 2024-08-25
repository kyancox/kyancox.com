"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef } from "react";

export function Modal({
  children,
  className,
  open,
  setOpen,
}: {
  children: ReactNode;
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 h-full w-full flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setOpen(false)}
      />
      <div
        ref={modalRef}
        className={cn(
          "xl:max-w-[50%] max-w-[80%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
          className
        )}
      >
        <CloseIcon setOpen={setOpen} />
        {children}
      </div>
    </div>
  );
}

export const ModalBody = ({
  children,
  className,
  open,
  setOpen,
}: {
  children: ReactNode;
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 h-full w-full flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setOpen(false)}
      />
      <div
        ref={modalRef}
        className={cn(
          // old height was min-h-[50%] max-h-[90%]
          "xl:max-w-[50%] max-w-[80%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
          className
        )}
      >
        <CloseIcon setOpen={setOpen} />
        {children}
      </div>
    </div>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

const CloseIcon = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to detect clicks outside of a component.
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};