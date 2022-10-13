import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args:{},
    argTypes: {},
    decorators: [(Story) => {
        return(
            <div className='flex items-center gap-2'>
                {Story()} 
                {/* isso aqui chama o coneudo eu acho */}
                <Text size='sm'> Lembrar-me por 30 dias</Text>
            </div>
        )
    }],
    
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
// decorators: [(story) => {
//     return(
//         <div>
//             {story()}
//             <Text> Lembrar-me de mim por 30 dias</Text>
//         </div>
//     )
// }]