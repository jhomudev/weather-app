type ItemAdd = {
  data: any,
  nameItem: string,
  needToStringify: boolean
}

type ItemReturn = {
  nameItem: string,
  needToParse: boolean
}

export const setDataLocalStorage = ({ data, nameItem, needToStringify }: ItemAdd) => {
  try {
    const dataToAdd = needToStringify ? JSON.stringify(data) : data
    localStorage.setItem(nameItem, dataToAdd)
  } catch (error) {
    throw new Error('Error al agregar datos a locaStorage\n Error:'+error);
  }
}

export const getDataLocalStorage = ({ nameItem, needToParse }: ItemReturn) => {
  try {
    const dataFound= localStorage.getItem(nameItem) as string
    const dataReturn = needToParse ? JSON.parse(dataFound) : dataFound
    return dataReturn
  } catch (error) {
    throw new Error('Error al obtener datos de locaStorage\n Error:'+error);
  }
}