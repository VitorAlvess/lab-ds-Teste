import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children:'Lorem Ipsun',
        size:'md'
    },
    argTypes: {
        size:{
            options:['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    argTypes: {
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
            disable: true,
            }
        }
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
    argTypes: { //desabilitei em todos pra não mexer nisso
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
            disable: true,
            }
        }
    }
}
export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg'
    },


    argTypes: {
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
            disable: true,
            }
        }
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: { 
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
    },
    argTypes: {
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
            disable: true,
            }
        }
    }
}


