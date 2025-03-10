import { GameDomain } from "@/entities/game";
import React from "react";

export function GamePlayers({ game }: { game: GameDomain.GameEntity }) {
  const firstPlayer = game.status === "idle" ? game.creator : game.players[0];
  const secondPlayer = game.status === "idle" ? undefined : game.players[1];
  return (
    <div className="flex flex-row gap-4 justify-between">
      <div className="text-lg">
        X - {firstPlayer.login}: {firstPlayer.rating}
      </div>
      <div className="text-lg">
        0 - {secondPlayer?.login ?? "..."}:{secondPlayer?.rating ?? "..."}
      </div>
    </div>
  );
}
