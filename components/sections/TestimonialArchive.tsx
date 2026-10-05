import type { ProductSlug } from '@/data/types';
import { TESTIMONIALS } from '@/data/stories';
import { TestimonialCard } from './TestimonialCard';

/** Lists testimonials; renders nothing while none are published. */
export function TestimonialArchive({ product }: { product?: ProductSlug }) {
  const items = product ? TESTIMONIALS.filter((t) => t.product === product) : TESTIMONIALS;

  if (items.length === 0) return null;

  return (
    <div className="testimonial-grid">
      {items.map((t) => (
        <TestimonialCard key={`${t.name}-${t.quote.slice(0, 16)}`} testimonial={t} />
      ))}
    </div>
  );
}
