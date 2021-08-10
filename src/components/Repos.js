const Repos = (props) => {
  const { data } = props

  return (
    <ul>
      {data.map((repo) => {
        return <li key={repo.id}>{repo.name}</li>
      })}
    </ul>
  )
}

export default Repos
