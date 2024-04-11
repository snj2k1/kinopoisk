type ActorsType = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
};

export interface IActors {
  persons: ActorsType[];
}
