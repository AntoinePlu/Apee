import { Alert, AlertDescription, AlertTitle } from "@apee/components/ui";

interface Props {
  children: React.ReactNode;
}

export function ErrorAlert({ children }: Props) {
  return (
    <div>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          <p>{children}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
