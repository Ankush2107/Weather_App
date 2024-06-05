import TextField from '@mui/material/TextField';
const SearchBox = () => {
  return (
    <div>
        <h1>Search for the Weather</h1>
        <form action="">
            <TextField id="outlined-basic" label="City name" variant="outlined" />
        </form>
    </div>
  )
}

export default SearchBox