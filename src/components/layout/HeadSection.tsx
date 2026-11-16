interface HeaderSectionProps {
  title: string;
  subtitle?: string;
}

export function HeaderSection({ title, subtitle }: HeaderSectionProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-[32px] font-semibold leading-tight tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-basket-darkgreen/60 tracking-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
