export class Product {
  static currentID: number = 1;
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
  rating: number;
  likes: number;
  constructor(name: string, image: string, link: string, description: string, rating: number) {
    this.name = name;
    this.image = image;
    this.link = link;
    this.description = description;
    this.rating = rating;
    this.id = Product.currentID++;
    this.likes = 0;
  }
}
