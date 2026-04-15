export type CategoriesType = {
    id: number
    name: string,
    namePtBr: string,
    scientificName: string,
    family: string,
    default_image: string
}


export class CategoriesEntity {
    public id!: number
    public name!: string
    public namePtBr!: string
    public scientificName!: string
    public family!: string
    public default_image!: string

    constructor({ id, name, namePtBr, scientificName, family , default_image }: CategoriesType) {
        this.id = id,
        this.name = name,
        this.namePtBr = namePtBr,
        this.scientificName = scientificName,
        this.family = family,
        this.default_image = default_image
    }
}