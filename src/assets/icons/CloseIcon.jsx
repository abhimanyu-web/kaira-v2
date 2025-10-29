const CloseIcon = ({ color = '#95A1A7', width = 24, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L8 8" stroke={color} strokeLinecap="round" />
      <path d="M1 8L8 1" stroke={color} strokeLinecap="round" />
    </svg>
  )
}

export default CloseIcon
