import { OutstandingReport } from "@/types/admin";

export function OutstandingReportsSection({ reports }: { reports: OutstandingReport[] }) {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold tracking-wider text-black/80">Outstanding Reports</h2>
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700">3 Pending</span>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-wider text-basket-darkgreen/40">
              <th className="pb-3 font-semibold">Report Title</th>
              <th className="pb-3 font-semibold">Submitted</th>
              <th className="pb-3 font-semibold">Program</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/40 text-xs">
            {reports.map((r) => (
              <tr key={r.id} className="group hover:bg-basket-cream/10">
                <td className="py-3.5 font-bold text-basket-darkgreen">{r.title}</td>
                <td className="py-3.5 text-basket-darkgreen/60 font-mono">{r.submittedDate}</td>
                <td className="py-3.5">
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    {r.program}
                  </span>
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}