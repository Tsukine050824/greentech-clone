import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">Không tìm thấy trang</p>
      <Link to="/" className="text-brand-600">Về trang chủ</Link>
    </div>
  );
}
