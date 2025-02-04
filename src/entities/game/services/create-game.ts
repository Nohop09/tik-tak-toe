import { gameRepository } from "../repositories/game"
import {PlayerEntity } from "../domain"
import cuid from 'cuid'
export  async function createGame(player: PlayerEntity) {
    const playerGames = await gameRepository.gamesList({
        players: {some: {id:player.id}},
        status: 'idle',
    })

    const isGameInIdleStatus = playerGames.some((game) => game.status === 'idle' && game.creator.id === player.id,
   ) 
   if (isGameInIdleStatus)    {
      return {
        type: 'error',
        error: 'can-create-only-one-game'
    } as const 
}
    const createdGame = await gameRepository.createGame({
        id: cuid(),
        creator: player,
        status: 'idle',
       }
    )

    return createdGame 
}