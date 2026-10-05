import type { CommunityStory } from '@/data/stories';
import { SafeImage } from '../ui/SafeImage';

export function CommunityCard({ story }: { story: CommunityStory }) {
  return (
    <article className="community-card">
      <div className="community-card__media">
        <SafeImage asset={story.asset} sizes="(min-width: 1024px) 380px, (min-width: 720px) 50vw, 100vw" fill />
      </div>
      <div className="community-card__body">
        <p className="community-card__place">{story.place}</p>
        <h3 className="community-card__title">{story.title}</h3>
        <p>{story.body}</p>
      </div>
    </article>
  );
}
