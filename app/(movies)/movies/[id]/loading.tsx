type LoadingProps = {
  text: string
}

export default function Loading(props: LoadingProps) {
  return <h2>
    Loading {props.text}...
  </h2>
}