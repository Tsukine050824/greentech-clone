export default function Contact() {
  return (
    <section className="section">
      <div className="container-default grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-semibold mb-3">Liên hệ</h1>
          <p>Địa chỉ: Toà nhà MITEC, 23 Nguyễn Cơ Thạch, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</p>
          <p className="mt-2">Điện thoại: 02432018205</p>
          <p>Email: accountant-vn@gtsystem.co.kr</p>
        </div>
        <form className="grid gap-3">
          <input className="border rounded px-3 py-2" placeholder="Họ tên" />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
          <textarea className="border rounded px-3 py-2" placeholder="Nội dung" rows={5} />
          <button className="bg-brand-600 text-white rounded px-4 py-2 w-fit" type="button">Gửi</button>
        </form>
      </div>
    </section>
  );
}
