import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar os itens salvos
    const getItem = async (key) => {
        try{

            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];

        }catch(error) {
            console.log("Erro ao buscar!", error)
            return [];
        }
    }

    //Salvar um item no Storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            // Verificar se o item já existe no array
            const itemExists = passwords.some(password => password.name === value.name && password.password === value.password);
            if (!itemExists) {
                // Se o item não existir, adicione-o ao array
                passwords.push(value);
                await AsyncStorage.setItem(key, JSON.stringify(passwords));
            }
        } catch (error) {
            console.log("Erro ao Salvar!", error);
        }
    };

    //Remover algo do storage
    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((password) => {
                return (password.name !== item.name) // Compare the name property of each password
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;

        }catch(error) {
            console.log("Error ao Deletar!", error)
        }
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;