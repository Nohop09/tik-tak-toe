"use server";

import { GameId } from "@/kernel/ids";

import { GameClient } from "./game-client";
import { getCurrentUser } from "@/entities/user/server";
import { startGame } from "@/entities/game/server";
import { gameEvents } from "../services/game-events";
import { getGameById } from "@/entities/game/services/get-game";
import { redirect } from "next/navigation";

export async function Game({ gameId }: { gameId: GameId }) {
  const user = await getCurrentUser();
  let game = await getGameById(gameId);
  if (!game) {
    redirect("/");
  }
  if (user) {
    const startGameResult = await startGame(gameId, user);
    if (startGameResult.type === "right") {
      game = startGameResult.value;
      gameEvents.emit(startGameResult.value);
    }
  }
  return <GameClient defaultGame={game} />;
}
