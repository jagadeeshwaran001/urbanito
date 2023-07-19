"use client";

import { Text, TextProps } from "@nextui-org/react";

export function UrbanitoText({children, ...props}: TextProps) {
  return (
    <Text {...props}>{children}</Text>
  )
}