export interface Props {
  label: string;
  defaultValue: number;
}

export function Input({ label, defaultValue }: Props) {
  if (!label) return null;

  return (
    <label className="min-size-ui inline-full flex flex-col flex-wrap mbs-3 ">
      <span>{label}</span>
      <input
        className="border-border border-2 rounded-md py-2 px-3 mbs-1"
        id={label}
        type="number"
        name={label}
        placeholder="0"
        max={300}
        min={0}
        maxLength={3}
        defaultValue={defaultValue}
      />
    </label>
  );
}
