import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function  GameCard({login,rating}: ({login:string; rating:number}))  {
 
 return (
 <div>
    {   
    <Card>
        <CardHeader>
            <CardTitle> Игра с {login}</CardTitle>

         </CardHeader>
     <CardContent>Рейтинг: {rating}</CardContent>
    </Card>}
  
 </div>) 

 
}