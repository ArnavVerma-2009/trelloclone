import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {
  name: string;
};
const ListCard = ({ name }: Props) => {
  return (
    <Card className="w-64 h-full bg-[#1e1e1e10] backdrop-blur-xl border-[1px] border-[#fefefe25]">
      <CardHeader className="">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>Card</CardContent>
    </Card>
  );
};

export default ListCard;
