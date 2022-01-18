import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
// material
import { styled } from '@mui/material/styles';
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography
} from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

// ----------------------------------------------------------------------

JobsToolbar.propTypes = {
  numSelected: PropTypes.number
};

export default function JobsToolbar({ numSelected, completeAll }) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography component="div" variant="subtitle1">
          Job List
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Complete" arrow>
          <IconButton onClick={event => completeAll(event)}>
            <CheckIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <div />
      )}
    </RootStyle>
  );
}
