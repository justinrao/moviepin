import { Box, Icon, Text, Icons } from "gestalt";
import { Movie } from "../../../shared/model/Movie.model";
import React, { ReactNode } from "react";

interface Props {
    icon: Icons;
    label: string;
    children: ReactNode
}

export default ({ icon, label, children }: Props) => (
    <Box display='flex' direction='row' alignItems='center'>
        <Box flex='none' paddingX={2} >
            <Icon icon={icon} accessibilityLabel={label} color='red'></Icon>
        </Box>
        <Box dangerouslySetInlineStyle={{ __style: { flex: '0 0 120px' } }} paddingY={2}>{label}:</Box>
        <Box flex='shrink'>
            <Text size="lg">{children}</Text>
        </Box>
    </Box>) 
