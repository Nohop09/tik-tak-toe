import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
export function AuthFormLayout({
  actions,
  description,
  fields,
  error,
  link,
  title,
  action,
}: {
  title: string;
  description: string;
  fields: React.ReactNode;
  actions: React.ReactNode;
  link: React.ReactNode;
  error: React.ReactNode;
  action: (formdata: FormData) => void;
}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space y-4">
          {fields}
          {error}
          {actions}
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">{link}</CardFooter>
    </Card>
  );
}
