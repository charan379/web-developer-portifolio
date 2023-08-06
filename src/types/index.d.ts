type Profile = {
    name: string,
    shortName: string
    displayPicture: string,
    email: string,
    mobile: Mobile[],
    skillTags: string[],
    aboutMe: string
}

type Mobile = {
    countryCode: string,
    number: number,
    primary: boolean,
    whatsapp: boolean
}
type Skill = {
    name: string,
    description: string,
    image: string,
}

type Project = {
    name: string,
    description: string,
    image: string,
    technologies: Array<string>,
    github: string,
    demo: string,
}