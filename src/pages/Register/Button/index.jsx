export function Button({
  children,
  type,
  loading,
  disabled,
  className,
  style,
}) {
  return (
    <button type={type} disabled={disabled} style={style} className={className}>
      {children}
    </button>
  )
}
