/**
 * @name localstorage   
 * @description Données persistantes dans le navigateur
 * @author CD
 * @version 1.0
 */

export default{

    save(key, value){

        //on convertit les données en String avant inserstion
        localStorage.setItem(key, JSON.stringify(value));
    },
    load(key){
        const value = localStorage.getItem(key);
        if(value != null){
            //reconvertir le String en valeur JS
            return JSON.parse(value);
        }

        return null;
    },
    delete(){}
}