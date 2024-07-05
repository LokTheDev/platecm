import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CommentIcon from '@mui/icons-material/Comment';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: 5 }}>

            <Box component="section" sx={{ p: 5, textAlign: 'center', bgcolor: '#eaecf0' }}>
                <Typography variant="h4">
                    Discover What's Happening Behind the Wheel
                </Typography>
            </Box>
            <Divider />
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Join
                        <Typography variant="subtitle2" noWrap>
                            The PlateCM Commuity for Updates
                        </Typography>

                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Share
                        <Typography variant="subtitle2" noWrap>
                            Share What You Have Seen On The Road
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>
                        Review
                        <Typography variant="subtitle2" noWrap>
                            Check What People Shared About You
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Divider />
            <Box component="section" sx={{ p: 5, display: 'flex', justifyContent: 'center',alignItems:'center',bgcolor: '#eaecf0' }}>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <StarIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Rate" secondary="Get and Give Rating Out of 5" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CommentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Comments" secondary="Leave Comments Under Plate Number" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <DangerousIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Stats" secondary="See Area Stats" />
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}

export default HomePage;