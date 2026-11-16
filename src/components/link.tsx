export interface Props {
  href: string;
  label: string;
  newTab?: boolean;
}

export function Link({ href, label, newTab = false }: Props) {
  return (
    <a
      className="contain-content text-primary font-bold hover:underline active:scale-95"
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer nofollow" : undefined}
    >
      {label}
    </a>
  );
}
