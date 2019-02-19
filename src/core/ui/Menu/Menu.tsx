import React from 'react';
import { Box, Divider, Text } from "gestalt";
import './Menu.css';

interface MenuDef {
  key: string;
  label: string;
  onClick: () => void;
}

interface Props {
  menuDefs: MenuDef[];
}

const Menu = ({ menuDefs }: Props) => (

  <Box width="100%">
    {menuDefs.map((def, idx) => (
      <div key={def.key}>
        <MenuItem {...def} />
        {idx < menuDefs.length - 1 && <Divider />}
      </div>
    ))}

  </Box>)

const MenuItem = ({ label, onClick }: { label: string, onClick?: () => void }) => (
  <div className="menu-item" onClick={onClick}>
    <Box padding={3} >
      <Text bold align="center" size="md">
        {label}
      </Text>
    </Box>
  </div>
)

export default Menu;
