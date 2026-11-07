import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

type TeaserModalProps = {
  title: string;
  src: string;
  open: boolean;
  onClose: () => void;
};

export function TeaserModal({ title, src, open, onClose }: TeaserModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    // Esc closes the dialog natively; clicking the backdrop is a mouse-only shortcut.
    // biome-ignore lint/a11y/useKeyWithClickEvents: Esc is handled by <dialog>
    <dialog
      ref={dialogRef}
      aria-label={`${title} teaser`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="m-auto max-w-[90vw] overflow-visible bg-transparent backdrop:bg-black/60"
    >
      {/* Mount the video only while open so closing stops playback. */}
      {open && (
        <div className="relative">
          <video
            src={src}
            controls
            autoPlay
            muted
            playsInline
            className="block max-h-[80vh] max-w-[90vw] rounded-[1.25rem]"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
      )}
    </dialog>
  );
}
