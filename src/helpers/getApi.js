export const getApi = async(category) => {
    const url = `https://agenciasenlinea.aviatur.com/aviatur/cities.json`;

    const resp = await fetch( url );
    const data = await resp.json();

    const cities = data.map( city => ({
        id,
        name_city,
        code_city
    }))

    return cities;
}