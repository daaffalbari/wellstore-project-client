interface RowProps{
    label:string;
    valeu: string|number;
    className?: string;
}
export default function Row(props: Partial<RowProps>) {
    const {label, valeu, className} = props;
  return (
    <p className="text-lg color-palette-1 mb-20"> 
                {label}<span className={`purchase-details ${className}`}>{valeu}</span>
              </p>
  )
}
