import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section page-top">
      <div className="container simple-page">
        <p className="eyebrow">404</p>
        <h1>Halaman tidak ditemukan</h1>
        <p className="lede">Halaman yang kamu cari tidak tersedia atau telah dipindahkan.</p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Kembali ke beranda
          </Link>
          <Link href="/products" className="btn btn--ghost">
            Lihat produk
          </Link>
        </div>
      </div>
    </section>
  );
}
