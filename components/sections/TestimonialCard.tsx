import { getProduct } from '@/data/products';
import type { Testimonial } from '@/data/stories';
import { SafeImage } from '../ui/SafeImage';
import { SourceMaterial } from '../ui/SourceMaterial';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const product = getProduct(testimonial.product);
  return (
    <figure className="testimonial">
      {testimonial.photo && (
        <div className="testimonial__photo">
          <SafeImage asset={testimonial.photo} sizes="96px" />
        </div>
      )}
      <p className="claim claim--company">Testimoni pengguna</p>
      <blockquote className="testimonial__quote">“{testimonial.quote}”</blockquote>
      <figcaption>
        <strong>{testimonial.name}</strong>
        <span>
          {testimonial.context}
          {product && ` · ${product.name}`}
        </span>
      </figcaption>
      {testimonial.original && (
        <SourceMaterial
          items={[{ title: 'Materi asli', caption: 'Materi testimoni sebagaimana dibagikan.', asset: testimonial.original }]}
        />
      )}
      <p className="testimonial__note">Pengalaman pribadi; hasil dapat berbeda pada setiap orang.</p>
    </figure>
  );
}
