'use client';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrengthMeter({ password }: PasswordStrengthProps) {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getStrength(password);
  const labels = ['Weak', 'Fair', 'Good', 'Strong password'];

  return (
    <div className="space-y-1.5 pt-1">
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              step <= strength
                ? strength === 4
                  ? 'bg-emerald-600'
                  : strength === 3
                  ? 'bg-emerald-500'
                  : 'bg-amber-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      {password && (
        <p className="text-[11px] text-gray-500 font-medium">
          {labels[Math.max(0, strength - 1)]}
        </p>
      )}
    </div>
  );
}