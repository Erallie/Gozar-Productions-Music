import type { PageLoad } from "./$types";
export const load: PageLoad = async () => {

    const image = "/erika-gozar.png";
    const imageAlt = "Erika Gozar";
    const description = "Erika Gozar has written music since she was 8 or 9 with simply an ear for music and no formal training in composition. Under the musical guidance of John Massaro and the vocal instruction of Gail Dubinbaum, Erika currently writes pieces for orchestra and voice in the style of film and musical theater.";

    return { image, imageAlt, description };
};