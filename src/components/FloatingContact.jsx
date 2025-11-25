import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg border bg-white px-4 py-2"
        aria-label="Hỗ trợ"
      >
        Hỗ trợ
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Form hỗ trợ</h3>
              <button onClick={() => setOpen(false)} aria-label="Đóng">✕</button>
            </div>
            <form className="grid gap-3">
              <input className="border rounded px-3 py-2" placeholder="Họ tên" />
              <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
              <input className="border rounded px-3 py-2" placeholder="Điện thoại" />
              <textarea className="border rounded px-3 py-2" placeholder="Nội dung" rows={4}/>
              <button type="button" className="bg-brand-600 text-white rounded px-4 py-2">Gửi</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
