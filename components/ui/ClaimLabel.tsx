import type { ClaimKind } from '@/data/types';
import { cx } from '@/lib/cx';

const LABELS: Record<ClaimKind, string> = {
  documented: 'Terdokumentasi',
  company: 'Materi AFC',
};

/** Marks whether a statement is documented or comes from AFC's own material. */
export function ClaimLabel({ kind }: { kind: ClaimKind }) {
  return <span className={cx('claim', kind === 'company' && 'claim--company')}>{LABELS[kind]}</span>;
}
