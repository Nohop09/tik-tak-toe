import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export async function GameCard({
  login,
  rating,
  actions,
}: {
  login: string;
  rating: number;
  actions: React.ReactNode;
}) {
  return (
    <div>
      {
        <Card>
          <CardHeader>
            <CardTitle> Игра с {login}</CardTitle>
          </CardHeader>
          <CardContent>Рейтинг: {rating}</CardContent>
          <CardFooter>{actions}</CardFooter>
        </Card>
      }
    </div>
  );
}
