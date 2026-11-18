"use client";

import { Suspense, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AdminOpportunity } from "@/types/admin";
import { OpportunityDetails } from "./OpportunityDetails";
import { initialProgrammes } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function OpportunityContent() {
  const params = useParams();
  const router = useRouter();
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<AdminOpportunity | null>(null);
  const id = params.id as string;

  const opportunity = initialProgrammes.find(
    (programme: AdminOpportunity) => programme.id === id,
  );

  return (
    <Dialog
      open={!!selectedOpportunity}
      onOpenChange={(open) => {
        if (!open) setSelectedOpportunity(null);
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        {selectedOpportunity && (
          <OpportunityDetails opportunity={selectedOpportunity} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function OpportunityDetailsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-sm text-muted-foreground">Loading opportunity details...</div>}>
      <OpportunityContent />
    </Suspense>
  );
}