//------------------------------------------------
// A temporary file just to test out things, Nothing to do or is related with main codebase
//Please ignore
//------------------------------------------------
/* eslint-disable no-use-before-define */
import React from 'react'
import Chip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3)
    }
  }
}))

export default function Tags() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        onChange={(event, newValue) => {
          console.log(event)
          console.log(newValue)
        }}
        // filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 }
]

/* eslint-disable no-use-before-define */
// import React from 'react';
// import { useTheme, fade, makeStyles } from '@material-ui/core/styles';
// import Popper from '@material-ui/core/Popper';
// import SettingsIcon from '@material-ui/icons/Settings';
// import CloseIcon from '@material-ui/icons/Close';
// import DoneIcon from '@material-ui/icons/Done';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import InputBase from '@material-ui/core/InputBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 221,
//     fontSize: 13,
//   },
//   button: {
//     fontSize: 13,
//     width: '100%',
//     textAlign: 'left',
//     paddingBottom: 8,
//     color: '#586069',
//     fontWeight: 600,
//     '&:hover,&:focus': {
//       color: '#0366d6',
//     },
//     '& span': {
//       width: '100%',
//     },
//     '& svg': {
//       width: 16,
//       height: 16,
//     },
//   },
//   tag: {
//     marginTop: 3,
//     height: 20,
//     width: 400,
//     padding: '.15em 4px',
//     fontWeight: 600,
//     lineHeight: '15px',
//     borderRadius: 2,
//   },
//   popper: {
//     border: '1px solid rgba(27,31,35,.15)',
//     boxShadow: '0 3px 12px rgba(27,31,35,.15)',
//     borderRadius: 3,
//     width: 300,
//     zIndex: 1,
//     fontSize: 13,
//     color: '#586069',
//     backgroundColor: '#f6f8fa',
//   },
//   header: {
//     borderBottom: '1px solid #e1e4e8',
//     padding: '8px 10px',
//     fontWeight: 600,
//   },
//   inputBase: {
//     padding: 10,
//     width: '100%',
//     borderBottom: '1px solid #dfe2e5',
//     '& input': {
//       borderRadius: 4,
//       backgroundColor: theme.palette.common.white,
//       padding: 8,
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       border: '1px solid #ced4da',
//       fontSize: 14,
//       '&:focus': {
//         boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   },
//   paper: {
//     boxShadow: 'none',
//     margin: 0,
//     color: '#586069',
//     fontSize: 13,
//   },
//   option: {
//     minHeight: 'auto',
//     alignItems: 'flex-start',
//     padding: 8,
//     '&[aria-selected="true"]': {
//       backgroundColor: 'transparent',
//     },
//     '&[data-focus="true"]': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
//   popperDisablePortal: {
//     position: 'relative',
//   },
//   iconSelected: {
//     width: 17,
//     height: 17,
//     marginRight: 5,
//     marginLeft: -2,
//   },
//   color: {
//     width: 14,
//     height: 14,
//     flexShrink: 0,
//     borderRadius: 3,
//     marginRight: 8,
//     marginTop: 2,
//   },
//   text: {
//     flexGrow: 1,
//   },
//   close: {
//     opacity: 0.6,
//     width: 18,
//     height: 18,
//   },
// }));

// export default function GitHubLabel() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [value, setValue] = React.useState([labels[1], labels[11]]);
//   const [pendingValue, setPendingValue] = React.useState([]);
//   const theme = useTheme();

//   const handleClick = (event) => {
//     setPendingValue(value);
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'toggleInput') {
//       return;
//     }
//     setValue(pendingValue);
//     if (anchorEl) {
//       anchorEl.focus();
//     }
//     setAnchorEl(null);
//     console.log(value)
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'github-label' : undefined;

//   return (
//     <React.Fragment>
//       <div className={classes.root}>
//         <ButtonBase
//           disableRipple
//           className={classes.button}
//           aria-describedby={id}
//           onClick={handleClick}
//         >
//           <span>Labels</span>
//           <SettingsIcon />
//         </ButtonBase>
//         {value.map((label) => (
//           <div
//             key={label.name}
//             className={classes.tag}
//             style={{
//               backgroundColor: label.color,
//               color: theme.palette.getContrastText(label.color),
//             }}
//           >
//             {label.name}
//           </div>
//         ))}
//       </div>
//       <Popper
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         placement="bottom-start"
//         className={classes.popper}
//       >
//         <div className={classes.header}>Apply labels to this pull request</div>
//         <Autocomplete
//           open
//           onClose={handleClose}
//           multiple
//           classes={{
//             paper: classes.paper,
//             option: classes.option,
//             popperDisablePortal: classes.popperDisablePortal,
//           }}
//           value={pendingValue}
//           onChange={(event, newValue) => {
//             setPendingValue(newValue);
//           }}
//           disableCloseOnSelect
//           disablePortal
//           renderTags={() => null}
//           noOptionsText="No labels"
//           renderOption={(option, { selected }) => (
//             <React.Fragment>
//               <DoneIcon
//                 className={classes.iconSelected}
//                 style={{ visibility: selected ? 'visible' : 'hidden' }}
//               />
//               <span className={classes.color} style={{ backgroundColor: option.color }} />
//               <div className={classes.text}>
//                 {option.name}
//                 <br />
//                 {option.description}
//               </div>
//               <CloseIcon
//                 className={classes.close}
//                 style={{ visibility: selected ? 'visible' : 'hidden' }}
//               />
//             </React.Fragment>
//           )}
//           options={[...labels].sort((a, b) => {
//             // Display the selected labels first.
//             let ai = value.indexOf(a);
//             ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
//             let bi = value.indexOf(b);
//             bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
//             return ai - bi;
//           })}
//           getOptionLabel={(option) => option.name}
//           renderInput={(params) => (
//             <InputBase
//               ref={params.InputProps.ref}
//               inputProps={params.inputProps}
//               autoFocus
//               className={classes.inputBase}
//             />
//           )}
//         />
//       </Popper>
//     </React.Fragment>
//   );
// }

// // From https://github.com/abdonrd/github-labels
// const labels = [
//   {
//     name: 'good first issue',
//     color: '#7057ff',
//     description: 'Good for newcomers',
//   },
//   {
//     name: 'help wanted',
//     color: '#008672',
//     description: 'Extra attention is needed',
//   },
//   {
//     name: 'priority: critical',
//     color: '#b60205',
//     description: '',
//   },
//   {
//     name: 'priority: high',
//     color: '#d93f0b',
//     description: '',
//   },
//   {
//     name: 'priority: low',
//     color: '#0e8a16',
//     description: '',
//   },
//   {
//     name: 'priority: medium',
//     color: '#fbca04',
//     description: '',
//   },
//   {
//     name: "status: can't reproduce",
//     color: '#fec1c1',
//     description: '',
//   },
//   {
//     name: 'status: confirmed',
//     color: '#215cea',
//     description: '',
//   },
//   {
//     name: 'status: duplicate',
//     color: '#cfd3d7',
//     description: 'This issue or pull request already exists',
//   },
//   {
//     name: 'status: needs information',
//     color: '#fef2c0',
//     description: '',
//   },
//   {
//     name: 'status: wont do/fix',
//     color: '#eeeeee',
//     description: 'This will not be worked on',
//   },
//   {
//     name: 'type: bug',
//     color: '#d73a4a',
//     description: "Something isn't working",
//   },
//   {
//     name: 'type: discussion',
//     color: '#d4c5f9',
//     description: '',
//   },
//   {
//     name: 'type: documentation',
//     color: '#006b75',
//     description: '',
//   },
//   {
//     name: 'type: enhancement',
//     color: '#84b6eb',
//     description: '',
//   },
//   {
//     name: 'type: epic',
//     color: '#3e4b9e',
//     description: 'A theme of work that contain sub-tasks',
//   },
//   {
//     name: 'type: feature request',
//     color: '#fbca04',
//     description: 'New feature or request',
//   },
//   {
//     name: 'type: question',
//     color: '#d876e3',
//     description: 'Further information is requested',
//   },
// ];
