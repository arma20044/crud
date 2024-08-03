import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HTMLInputTypeAttribute } from "react";

interface Props {
    label: string;
    placeholder: string;
    inputType:HTMLInputTypeAttribute 
}

export function InputWithLabel({label,placeholder,inputType}:Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input type={inputType} placeholder={placeholder} />
    </div>
  )
}
