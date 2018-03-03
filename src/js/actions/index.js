import { LIST_PLAYER } from "../constants/types"

const playerInitialState = [
  {
    initialNbOfShare: 4,
    initialSharePrice: 2,
    priceIncrementor: 2,
    shareIncrementor: 2,
    songName: "Hello",
    artistName: "Adele",
    photoUrl: "photoUrl",
    songUrl: "SongUrl",
    Schares: ""
  }
]

export function ListPlayer() {
  return playerInitialState
}
