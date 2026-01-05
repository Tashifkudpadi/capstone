"use client";

import {
  Calendar,
  Users,
  Presentation,
  Menu,
  X,
  ChevronDown,
  XCircle,
} from "lucide-react";

export function IframeModal({ url, isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* <div className="absolute top-0 h-20 w-full z-10 p-2 bg-body"> */}
        <button
          onClick={onClose}
          className="absolute top-4 right-8 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all shadow-lg"
          aria-label="Close"
        >
          <XCircle size={24} />
        </button>
        {/* </div> */}
        <iframe
          src={url}
          className="w-full h-full"
          title="External Content"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
