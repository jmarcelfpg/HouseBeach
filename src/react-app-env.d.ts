/// <reference types="react-scripts" />
/// <reference types="@mui/system" />

import { Theme, SxProps } from '@mui/material/styles'

declare module 'react' {
    interface Attributes {
        sx?: SxProps<Theme>
    }
}