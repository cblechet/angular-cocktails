import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://i.topito.com/4-sh8qTVEGUOesl5ftnQA3oAS_kraVLngTVsGL0FMtM=/670x986/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fmedia.topito.com%2Fwp-content%2Fuploads%2F2017%2F07%2FMojito.jpg',
      description:
        'Vous votez pour le mojito alors que vous oubliez systématiquement d’y rajouter l’indispensable jaraba de goma. Vous buvez de l’eau aromatisée à la menthe. Vous êtes comme ça, vous, pas exigeants pour un sou, toujours content de pouvoir voyager sans bouger depuis une place en terrasse. Quitte à avoir un goût âcre dans la bouche.',
    },
    {
      name: 'test1',
      img: 'https://i.topito.com/4-sh8qTVEGUOesl5ftnQA3oAS_kraVLngTVsGL0FMtM=/670x986/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fmedia.topito.com%2Fwp-content%2Fuploads%2F2017%2F07%2FMojito.jpg',
      description:
        'Vous votez pour le mojito alors que vous oubliez systématiquement d’y rajouter l’indispensable jaraba de goma. Vous buvez de l’eau aromatisée à la menthe. Vous êtes comme ça, vous, pas exigeants pour un sou, toujours content de pouvoir voyager sans bouger depuis une place en terrasse. Quitte à avoir un goût âcre dans la bouche.',
    },
    {
      name: 'test2',
      img: 'https://i.topito.com/4-sh8qTVEGUOesl5ftnQA3oAS_kraVLngTVsGL0FMtM=/670x986/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fmedia.topito.com%2Fwp-content%2Fuploads%2F2017%2F07%2FMojito.jpg',
      description:
        'Vous votez pour le mojito alors que vous oubliez systématiquement d’y rajouter l’indispensable jaraba de goma. Vous buvez de l’eau aromatisée à la menthe. Vous êtes comme ça, vous, pas exigeants pour un sou, toujours content de pouvoir voyager sans bouger depuis une place en terrasse. Quitte à avoir un goût âcre dans la bouche.',
    },
  ];
}
