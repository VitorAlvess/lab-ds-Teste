

import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';




export interface TextInputRootProps{
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps){
    return(
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root' //define o nome 

export interface TextInputIconProps{
    children:ReactNode
}
function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon' //define o nome 
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { //input html atributes para passar propriedades do html no placeholde e poder definir ele como email no textinputsotories
}
function TextInputInput( props: TextInputInputProps){ //passa todas as props do textipnut
    return(
            <input
                className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none "
                {...props} //extend pra todas as props
            />   
    )
}
TextInputInput.displayName = 'TextInput.Input' //define o nome 

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    icon: TextInputIcon,

}
// pra funcionar o classname tem q importal as global config do global.css no preview.cjs