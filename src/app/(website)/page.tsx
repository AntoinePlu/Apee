import { Alert, AlertDescription, AlertTitle } from "@apee/components/ui";
import { trumpGothic } from "@apee/lib/fonts";
import { keystatic } from "@apee/lib/keystatic";
import { cn } from "@apee/lib/utils";

export default async function Home() {
  const homepageData = await keystatic.singletons.homepage.read();

  if (!homepageData) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <div>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <p>
                Unable to fetch homepage data, please make sure it exists in
                Keystatic
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-center bg-[url('/images/home.svg')] bg-cover">
      <header className="p-6 xl:p-[120px]">
        <h1 className="text-xl/6 uppercase opacity-60">
          {homepageData?.intro}
        </h1>
        <h2
          className={cn(
            "mt-2.5 text-5xl uppercase leading-[normal] tracking-[0.96px] text-white",
            trumpGothic.className,
          )}
          dangerouslySetInnerHTML={{ __html: homepageData?.jobTitle }}
        />
        <div>
          <h3
            className={cn(
              "inline-block bg-gradient-to-br from-apee-gamingYellow via-apee-gamingOrange via-35% to-apee-gamingPurple bg-clip-text text-5xl uppercase leading-[normal] tracking-[0.96px] text-transparent",
              trumpGothic.className,
            )}
            dangerouslySetInnerHTML={{ __html: homepageData?.catchphrase }}
          />
        </div>
        <a
          className={cn(
            "mt-10 inline-flex items-center justify-center rounded-md p-0.5 text-sm/9",
            "bg-gradient-to-r from-apee-ctaOrange via-apee-ctaYellow to-apee-ctaEgg",
            "bg-[length:200%] bg-left transition-all duration-200 hover:bg-[length:100%]",
          )}
          href={`mailto:${homepageData.email}`}
        >
          <span className="rounded bg-apee-black px-5 font-bold uppercase text-white">
            {homepageData?.email.replace("@", " @ ")}
          </span>
        </a>
      </header>
    </div>
  );
}
