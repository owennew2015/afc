import type { Location } from '@/data/company';
import { SafeImage } from '../ui/SafeImage';

export function LocationCard({ location }: { location: Location }) {
  return (
    <article className="location">
      {location.image && (
        <div className="location__media">
          <SafeImage asset={location.image} sizes="(min-width: 1024px) 220px, 40vw" fill />
        </div>
      )}
      <div className="location__body">
        <p className="location__role">{location.role}</p>
        <h3 className="location__city">{location.city}</h3>
        <address>
          {location.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className="muted">{location.country}</span>
        </address>
      </div>
    </article>
  );
}
