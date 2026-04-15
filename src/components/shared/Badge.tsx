interface BadgeProps {
  label: string;
  variant?: 'brand' | 'muted' | 'surf';
  size?: 'sm' | 'md';
}

export function Badge({ label, variant = 'surf', size = 'sm' }: BadgeProps) {
  const variantClass =
    variant === 'brand'
      ? 'bg-brand/10 text-brand'
      : variant === 'muted'
        ? 'bg-surf-2 text-ink-3'
        : 'bg-surf-2 text-ink-2';

  const sizeClass = size === 'md' ? 'px-3 py-1 text-sm' : 'px-2.5 py-0.5 text-xs';

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variantClass} ${sizeClass}`}>
      {label}
    </span>
  );
}
