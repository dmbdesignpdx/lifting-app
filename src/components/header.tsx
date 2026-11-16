export interface Props {
  heading: string;
}

export function Header({ heading }: Props) {
  return (
    <header
      className="wrapper pbs-16 pbe-6"
      data-wrap
    >
      <h1 className="text-4xl font-black leading-[1.1] text-balance bg-clip-text text-transparent bg-linear-to-r from-secondary from-10% to-secondary-accent to-90%">
        {heading}
      </h1>
    </header>
  );
}
