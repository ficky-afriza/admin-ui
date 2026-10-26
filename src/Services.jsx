export const users = [
    {
        name: "April",
        email: "april@gmail.com",
        street: "Jl. Indraprasta",
        city: "Semarang",
        age: 25,
        job: "Web Developer"
    },

    {
        name: "Rheno",
        email: "rheno@gmail.com",
        street: "Jl. Pemuda",
        city: "Jepara",
        age: 23,
    },

    {
        name: "Nauval",
        email: "nauval@gmail.com",
        street: "Jl. Pemuda",
        city: "Semarang",
        age: 20,
    }
];

const city = "Semarang";
const street = "Jl. Indraprasta";

export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users.map((user) => ({
            name: user.name,
            email: user.email,
            city,
            street,
        }));
    } catch (error) {
        console.error("[Services] Gagal mengambil data:", error.message);
        throw error;
    }
};
