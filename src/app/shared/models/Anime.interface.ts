export interface AnimeInterface{
    attributes: AttributesInterface;
}

interface AttributesInterface {
    posterImage: ImageInterface;
    canonicalTitle: string;
}

interface ImageInterface {
    original: string;
}