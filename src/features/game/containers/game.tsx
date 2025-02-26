"use client";

import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/game-field";
import { GameDomain } from "@/entities/game";
import { useEventSource } from "@/shared/lib/sse/client";

export function Game({ gameId }: { gameId: GameId }) {
  const { dataStream, error } = useEventSource(`/game/${gameId}/stream`, 1);
  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      { id: "1", login: "Test", rating: 1000 },
      { id: "1", login: "Test", rating: 1000 },
    ],
    status: "gameOver",
    field: [null, null, null, null, "O", null, "X", null, null],
  };
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
