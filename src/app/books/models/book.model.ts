export interface IBookInfo {
    id?: string;
    imageURL: string;
    name: string;
    author: string;
    details?: IBookDetails;
};

interface IBookDetails {
    publicationYear?: number;
    about: string;
    genre?: string;
    editorial?: string;  
};

export const BooksCatalog : Array<IBookInfo> = [
    {
        id: 'book-01',
        imageURL: '../../../../assets/img/arrivals.jpg',
        name: 'The Arrivals',
        author: 'Lucas Yolld',
        details: {
            publicationYear: 2012,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Action',
            editorial: 'Norma'
        }
    },
    {
        id: 'book-02',
        imageURL: '../../../../assets/img/canciones.jpg',
        name: 'Fuimos Canciones',
        author: 'Elísabet Benavent',
        details: {
            publicationYear: 2001,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Fiction',
            editorial: 'Dimension Films'
        }
    },
    {
        id: 'book-03',
        imageURL: '../../../../assets/img/cultura.jpg',
        name: 'El día que se perdió la cultura',
        author: 'Javier Castillo',
        details: {
            publicationYear: 2008,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Action',
            editorial: 'Alfaguara'
        }
    },
    {
        id: 'book-04',
        imageURL: '../../../../assets/img/dracula.jpg',
        name: 'Dracula',
        author: 'Bram Stoker',
        details: {
            publicationYear: 2019,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Action',
            editorial: 'Norma'
        }
    },
    {
        id: 'book-05',
        imageURL: '../../../../assets/img/odesa.jpg',
        name: 'Ordesa',
        author: 'Manuel Vila',
        details: {
            publicationYear: 1995,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Drama',
            editorial: 'Norma'
        }
    },
    {
        id: 'book-06',
        imageURL: '../../../../assets/img/grimorio.jpg',
        name: 'Grimorio 13',
        author: 'Alvaro Aparicio',
        details: {
            publicationYear: 1899,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Action',
            editorial: 'Norma'
        }
    },
    {
        id: 'book-07',
        imageURL: '../../../../assets/img/hobbit.jpg',
        name: 'The Hobbit',
        author: 'J.R.R Tolkein',
        details: {
            publicationYear: 2004,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Romance',
            editorial: 'Palito de Papel'
        }
    },
    {
        id: 'book-08',
        imageURL: '../../../../assets/img/norte.jpg',
        name: 'Los Hombres del Norte',
        author: 'John Haywood',
        details: {
            publicationYear: 1999,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'Thriller',
            editorial: 'Norma'
        }
    },
    {
        id: 'book-09',
        imageURL: '../../../../assets/img/surviving.jpg',
        name: 'Surviving the ABYSS',
        author: 'Lola Sutton',
        details: {
            publicationYear: 1995,
            about: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
            genre: 'War',
            editorial: 'Alfaguara'
        }
    } 
];