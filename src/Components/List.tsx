import { ReactNode } from "react";//QUALQUER COISA DENTRO DO REACT
    interface IList{//definindo o tipo do dado que minha função pode receber 
        children:ReactNode
}


export function List(){

    return(
        <li>{Children}</li>//children é uma variavel, devido a isso está entre chaves
    )

}