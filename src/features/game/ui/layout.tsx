import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

export function GameLayout({
  status,
  field,
  players,
}: {
  players?: React.ReactNode;
  status?: React.ReactNode;
  field?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Крестики нолики 3х3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex items-center justify-center">{field}</div>
      </CardContent>
    </Card>
  );
}
