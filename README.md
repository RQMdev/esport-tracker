# eSport tracker
## Inscription
## Connexion
## Création d'Event
## Inscription à l'Event
## désinscription d'un Event
## Recherche
## Feed (Fil d'actu)


## Structure des données
### User
{
  id: ObjectId,
  username: String,
  level: Number,
  XP: Number,
  games: [1, 3],
  interest: [1, 2, 3, 4, 5],
  localisation: ["Rennes", "Nantes"],
  photo: 'url',
  newsletter: Boolean,
  imageRight: Boolean,
}

### Event
{
  id: ObjectId,
  name: String,
  EventType: [EventType, EventType, ...],
  organizer: [ UserId, UserId, ...],
  ratings: [Number, Number],
  maxUsers: Number, // -1 if infinite
  blacklist: [ UserId, UserId, ...],
  localisation: PlaceId,
  desc: String,   
}

### Place
{
  id: ObjectId,
  GPS: [x, y],
  address: String,
  img: String,
}

### EventType
const EventType = {
  LAN: "Lan",
  SALON: "Salon",
  EXPO: "Exposition",
  TOURNAMENT: "Tournament",
  CHAMPIONSHIP: "Championship",
  GARAGE: "Garage",
}

### GameList
const GameList = {
  LOL: "League Of Legends",
  DOTA2: "Dota 2",
  CSGO: "CS:GO",
  SC2: "Starcraft II",
  OW: "Overwatch",
  PUBG: "Player Unknow's Battlegrounds",
}
