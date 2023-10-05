"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src?: string | null;
}
export default function ImageModal({ isOpen, onClose, src }: ImageModalProps) {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image src={src} className="object-cover" fill alt="image" />
      </div>
    </Modal>
  );
}
