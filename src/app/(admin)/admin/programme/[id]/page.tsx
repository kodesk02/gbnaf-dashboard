"use client";

import { useParams, useRouter } from "next/navigation";
import { AdminOpportunity } from "@/types/admin";
import { OpportunityDetails } from "./OpportunityDetails";
import { initialProgrammes } from "@/lib/data";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function OpportunityDetailsPage() {
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
