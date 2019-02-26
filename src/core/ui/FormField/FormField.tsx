import React from 'react';
import { Box, Column, Label, TextField, Text } from "gestalt";
import { SyntheticEvent } from "react";

interface Props {
  label: string,
  field: string,
  type: "date" | "email" | "number" | "password" | "text" | "url",
  onChange: (value: string) => void
}

const FormField = ({ label, field, type, onChange }: Props) => (
  <Box display="flex" direction="row" paddingX={4} paddingY={2}>
    <Column span={4}>
      <Label htmlFor={field}>
        <Text align="left" bold>{label}</Text>
      </Label>
    </Column>
    <Column span={8}>
      <TextField id={field} type={type} onChange={(args: { event: SyntheticEvent, value: string }) => onChange(args.value)} />
    </Column>
  </Box>
)

export default FormField;