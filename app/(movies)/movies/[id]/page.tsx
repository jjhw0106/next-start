export default function MovieDetail({params: {id}, searchParams: {version}}) {
  console.log(id);
  console.log(version);
  return <div>
    <h1>Movie {id} {version}</h1>
  </div>
}
// export default function MovieDetail(props) {
//   console.log(props.params.id);
//   console.log(props.searchParams.version)
//   return <div>
//     <h1>Movie {props.id}</h1>
//   </div>
// }