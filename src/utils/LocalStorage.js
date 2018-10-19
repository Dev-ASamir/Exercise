import {AsyncStorage} from 'react-native';

export const setDataToLocalStorage=async (data, path)=>{
    const jsonData = await JSON.stringify(data);
    await AsyncStorage.setItem(path , jsonData );
  }

export const getDataFromLocalStorage = async(path)=>{
    const data = await AsyncStorage.getItem(path)
    if( data !== null ){
        //console.log("DATA HERE ");
        return JSON.parse(data);
    }else{
        return false
        //console.log("DATA NOT SAVED");
    }
}