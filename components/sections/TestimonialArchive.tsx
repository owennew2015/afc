import type { ProductSlug } from '@/data/types';
import { TESTIMONIALS } from '@/data/stories';
import { TestimonialCard } from './TestimonialCard';

/** Lists testimonials, or a deliberate placeholder while none are published. */
export function TestimonialArchive({ product }: { product?: ProductSlug }) {
  const items = product ? TESTIMONIALS.filter((t) => t.product === product) : TESTIMONIALS;

  if (items.length === 0) {
    return (
      <div className="placeholder testimonial-empty">
        <strong>Testimoni pengguna akan ditambahkan</strong>
        <span>
          Kami hanya menampilkan testimoni yang disampaikan langsung oleh pengguna, dengan izin, dan tanpa klaim
          penyembuhan penyakit.
        </span>
      </div>
    );
  }

  return (
    <div className="testimonial-grid">
      {items.map((t) => (
        <TestimonialCard key={`${t.name}-${t.quote.slice(0, 16)}`} testimonial={t} />
      ))}
    </div>
  );
}
