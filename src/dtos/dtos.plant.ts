import yup from "yup"
export const PlantReturnDTO = {
    name : yup
        .string()
        .strict()
        .matches(/^[A-Z-a-z\s]+$/,"O nome deve conter apenas letras")
        .required(),
    namePtBr: yup.string(),
    scientificName: yup.string(),
    family: yup.string(),
    default_image: yup.string().required()
}

export const UserCreatedSchema = yup.object(PlantReturnDTO)
export type CreatedUSer = yup.InferType<typeof UserCreatedSchema>
